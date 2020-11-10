const { prompt } = require("inquirer");
const databaseQuery = require("./index");

const listEmployees = async () => {

	const query = `
		SELECT id AS value, CONCAT(first_name, " ", last_name) AS name
		FROM employees
		ORDER BY name`;

	const employeesArray = await databaseQuery(query);
	return employeesArray;

};

const deleteEmployee = async () => {
	console.clear();
	
	const employeeChoice = {
		type: "list",
		name: "id",
		message: " Choose an employee to delete:\n",
		choices: await listEmployees(),
		pageSize: 30
	}

	const targetEmployee = await prompt(employeeChoice);
	const delete_query_emp = `DELETE FROM employees WHERE id = ?`;
	await databaseQuery(delete_query_emp, targetEmployee.id);

	console.clear();
	console.log(`\n   Employee deleted.` + `\n`);
};
