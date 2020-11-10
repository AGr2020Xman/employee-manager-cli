const { prompt } = require("inquirer");
const {databaseQuery} = require("./databaseQuery");

const listDepartments = async () => {

	const query = `
		SELECT id AS value, name
		FROM department
		ORDER BY name`;

	const departmentsArray = await databaseQuery(query);
	return departmentsArray;

}

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
}
