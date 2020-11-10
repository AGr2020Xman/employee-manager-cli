const { prompt } = require("inquirer");
const databaseQuery = require("./index");

const listRoles = async () => {

	const query = `
		SELECT id AS value, title AS name
		FROM role
		ORDER BY name`;

	const rolesArray = await databaseQuery(query);
	return rolesArray;

}

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
