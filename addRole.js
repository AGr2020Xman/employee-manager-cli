const { prompt } = require("inquirer");
const databaseQuery = require("./databaseQuery");


const listDepartments = async () => {

	const dept_query = `
    SELECT id AS value, name
    FROM department
    ORDER BY ID`;

	const resultsArray = await databaseQuery(dept_query);
	return resultsArray;
};

const queryNewRole = async () => {

	const roleQuestion = [
		{
		type: "input",
		name: "first_name",
		message: "Enter the name of the new role: ",
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
		message: "Enter the salary for the role: ",
		validate: function(value) {
			const valid = value.match(/^[0-9]*$/i);
			if (valid) {
				return true;
			}
            return "Please enter a valid amount (numeric characters only, no special characters)."
			}
		},
		{
		type: "list",
		name: "department_id",
		message: "Choose a department for the new role:\n",
		choices: await listDepartments(),
		pageSize: 12
		},
	];

	return prompt(roleQuestion);

};

const addRole = async () => {
	console.clear();

	const role_query = `INSERT INTO role SET ?`;
	const roleDetail = await queryNewRole();
	const newRole = await databaseQuery(role_query, roleDetail);

	console.clear();
	console.log(`\n   New role added. ID is ${newRole.insertId}` + `\n`);
};


module.exports = {addRole};