const { prompt } = require("inquirer");
const {databaseQuery} = require("./databaseQuery");
const { listDepartments } = require('../util/listFunctions');

const deleteDepartment = async () => {
	console.clear();
	
	const departmentChoice = {
		type: "list",
		name: "id",
		message: " Choose a department to delete:\n",
		choices: await listDepartments(),
		pageSize: 30
	}

	const targetDepartment = await prompt(departmentChoice);
	const delete_query_dept = `DELETE FROM department WHERE id = ?`;
	await databaseQuery(delete_query_dept, targetDepartment.id);

	console.clear();
	console.log(`\n   Department deleted.` + `\n`);
};

module.exports = { deleteDepartment };
