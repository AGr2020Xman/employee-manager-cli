const { prompt } = require("inquirer");
const {databaseQuery} = require("./databaseQuery");
const { listRoles, listEmployees, listManagers, listDepartments } = require('../util/listFunctions');

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
			choices: ["First Name", "Last Name", "Role", "Department", "Manager"],
			pageSize: 6
		},
		{
		type: "input",
		name: "first_name",
		message: "Enter the employee's first name: ",
		when: (answers) => answers.field === "First Name",
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
		when: (answers) => answers.field === "Last Name",
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
		when: (answers) => answers.field === "Role",
		choices: await listRoles(),
		pageSize: 12
		},
		// {
		// type: "list",
		// name: "department_id",
		// message: "Choose the employee's department:\n",
		// when: (answers) => answers.field === "Department",
		// choices: await listDepartments(),
		// pageSize: 12,
		// },
		{
		type: "confirm",
		name: "manager_yn",
		message: "Do you wish to make this employee a manager? \n",
		when: (answers) => answers.field === "Manager",
		pageSize: 10
		},
		{
		type: "list",
		name: "manager_id",
		message: "Choose the employee's manager:\n",
		when: (answers) => answers.manager_yn === false,
		choices: await listManagers(),
		pageSize: 10
		}
	];

	return prompt(updateQuestions);

};

const updateEmployee = async () => {
	console.clear();
	let updatedDetails = await updateDetails();
	console.log(updatedDetails);
	let update_query = `UPDATE employees SET ? WHERE id=?`;
	let updatedValuesArray = [updatedDetails.id];
	if (('manager_yn' in updatedDetails) === true){
		update_query = `UPDATE employees SET manager_id=? WHERE id=?`;
		delete updatedDetails['manager_yn'];
		updatedValuesArray.unshift(updatedDetails.manager_id)
	} else if (('manager_yn' in updatedDetails) === false) {
		update_query = `UPDATE employees SET ? WHERE id=?`;
		delete updatedDetails['manager_yn'];
		updatedDetails['manager_id'] = this.id;
		updatedValuesArray.unshift(updatedDetails);
	// } else if ('department_id' in updatedDetails) {
	// 	update_query = `UPDATE employees SET department_id=? WHERE id=?`;
	// 	updatedValuesArray.unshift(updatedDetails.department_id)
	// 	console.log('inside dept_id',updatedValuesArray);		
	} 
	else if ('role_id' in updatedDetails) {
		update_query = `UPDATE employees SET role_id=? WHERE id=?`
		updatedValuesArray.unshift(updatedDetails.role_id)
		console.log('inside roleid',updatedValuesArray);
	}

	delete updatedDetails.id;
	delete updatedDetails.field;	
	await databaseQuery(update_query, updatedValuesArray);
	
	console.log('\n Task complete!');
	console.log(` Employee updated.` + `\n`);
};

module.exports = { updateEmployee };