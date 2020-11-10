const { prompt } = require("inquirer");
const {databaseQuery} = require("./databaseQuery");


const listRoles = async () => {

	const role_query = `
		SELECT id AS value, title AS name
		FROM role
		ORDER BY id
	`;

	const resultsArray = await databaseQuery(role_query);
	return resultsArray;

}

const listManagers = async () => {

	const manager_query = `
		SELECT id AS value, CONCAT(first_name, " ", last_name) AS name
		FROM employee
		WHERE ISNULL(manager_id)
		ORDER BY ID
	`;

	const resultsArray = await databaseQuery(manager_query);
	return resultsArray;

}

const queryNewEmployee = async () => {

	const employeeQuestion = [
		{
		type: "input",
		name: "first_name",
		message: "Enter the employee's first name: ",
		validate: function(value) {
			const valid = value.match(/^[a-zA-Z\s]*$/);
			if (valid) {
				return true;
			}
            return "Please enter a valid name (letters and spaces only, no special characters)."
			}
		},
		{
		type: "input",
		name: "last_name",
		message: "Enter the employee's last name: ",
		validate: function(value) {
			const valid = value.match(/^[a-zA-Z\s]*$/);
			if (valid) {
				return true;
			}
            return "Please enter a valid name (letters and spaces only, no special characters)."
			}
		},
		{
		type: "list",
		name: "role_id",
		message: "Choose the employee's role: \n",
		choices: await listRoles(),
		pageSize: 12
		},
		{
		type: "list",
		name: "manager_id",
		message: "Choose the employee's manager: \n",
		choices: await listManagers(),
		pageSize: 12
		}
	];

	return prompt(employeeQuestion);
};

const addEmployee = async () => {

	
	console.clear();


	const employee_query = `INSERT INTO employee SET ?`;
	const employeeDetail = await queryNewEmployee();
	const newEmployee = await databaseQuery(employee_query, employeeDetail);

	console.clear();
	console.log(`\n   New department added. ID is ${newEmployee.insertId}` + `\n`);
};


module.exports = {addEmployee};