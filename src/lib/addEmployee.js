const { prompt } = require("inquirer");
const {databaseQuery} = require("./databaseQuery");
const { listRoles, listManagers } = require('./src/util/listFunctions');

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
		type: 'confirm',
		name: 'manager_yn',
		message: 'Is this employee a manager (if no, you will have to choose a manager)? \n',
		default: 'true',
		},
		{
		type: "list",
		name: "manager_id",
		message: "Choose the employee's manager: \n",
		choices: await listManagers(),
		pageSize: 12,
		when: (answer) => answer.manager_yn === false,
		}
	];

	return prompt(employeeQuestion);
};

const addEmployee = async () => {

	
	console.clear();


	const employee_query = `INSERT INTO employees SET ?`;
	const employeeDetail = await queryNewEmployee();
	delete employeeDetail['manager_yn'];
	const newEmployee = await databaseQuery(employee_query, employeeDetail);

	console.clear();
	console.log(`\n Task complete!`);
	console.log(` New employee added. ID is ${newEmployee.insertId}` + `\n`);
};


module.exports = {addEmployee};