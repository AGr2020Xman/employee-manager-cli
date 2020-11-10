const { prompt } = require("inquirer");
const {databaseQuery} = require("./databaseQuery");

const listEmployees = async () => {

	const query = `
		SELECT id AS value, CONCAT(first_name, " ", last_name) AS name
		FROM employees
		ORDER BY name`;

	const employeesArray = await databaseQuery(query);
	return employeesArray;

};

const listRoles = async () => {

	const query = `
		SELECT id AS value, title AS name
		FROM role
		ORDER BY name`;

	const rolesArray = await databaseQuery(query);
	return rolesArray;

};

const listManagers = async () => {

	const manager_query = `
		SELECT id AS value, CONCAT(first_name, " ", last_name) AS name
		FROM employee
		WHERE ISNULL(manager_id)
		ORDER BY ID
	`;

	const resultsArray = await databaseQuery(manager_query);
	return resultsArray;

};


const updateDetails = async () => {


	const updateQuestions = [
		{
			type: "list",
			name: "id",
			message: "Choose which employee to update:\n",
			choices: await listEmployees(),
			pageSize: 30
		},
		{
			type: "list",
			name: "field",
			message: "What field would you like to update?\n ",
			choices: ["First Name", "Last Name", "Role", "Manager"],
			pageSize: 6
		},
		{
		type: "input",
		name: "first_name",
		message: "Enter the employee's first name: ",
		when: function(answers) {
			return answers.field === "First Name";
			},
		validate: function(value) {
			const valid = value.match(/^[a-zA-Z\s]+$/i);
			if (valid) {
				return true;
			}
			return "Please enter a valid name (letter characters and spaces only).";
			}
		},
		{
		type: "input",
		name: "last_name",
		message: "Enter the employee's last name: ",
		when: function(answers) {
			return answers.field === "Last Name";
			},
		validate: function(value) {
			const valid = value.match(/^[a-zA-Z\s]+$/i);
			if (valid) {
				return true;
			}
			return "Please enter a valid name (letter characters and spaces only).";
			}
		},
		{
		type: "list",
		name: "role_id",
		message: "Choose the employee's role:\n",
		when: function(answers) {
			return answers.field === "Role";
			},
		choices: await listRoles(),
		pageSize: 12
		},
		{
		type: "list",
		name: "manager_id",
		message: "Choose the employee's manager:\n",
		when: function(answers) {
			return answers.field === "Manager";
			},
		choices: await listManagers(),
		pageSize: 10
		}
	];

	return prompt(updateQuestions);

};

const updateEmployee = async () => {
	console.clear();
	
	let updatedDetails = await promptUpdateDetails();
    let updatedValuesArray = [updatedDetails.id];

	delete updatedDetails.id;
	delete updatedDetails.field;

	updatedValuesArray.unshift(updatedDetails);	
	const update_query = `UPDATE employee SET ? WHERE id=?`;
	await databaseQuery(update_query, updatedValuesArray);
	
	console.clear();
	console.log(`\n   Employee updated.` + `\n`);
};