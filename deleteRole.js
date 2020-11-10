const { prompt } = require("inquirer");
const {databaseQuery} = require("./databaseQuery");
const { listRoles } = require('./listFunctions');

const deleteRole = async () => {
	console.clear();
	
	const roleChoice = {
		type: "list",
		name: "id",
		message: " Choose a role to delete:\n",
		choices: await listRoles(),
		pageSize: 30
	}

	const targetRole = await prompt(roleChoice);
	const delete_query_role = `DELETE FROM role WHERE id = ?`;
	await databaseQuery(delete_query_role, targetRole.id);
	
	console.clear();
	console.log(`\n   Role deleted.` + `\n`);
}

module.exports = { deleteRole };