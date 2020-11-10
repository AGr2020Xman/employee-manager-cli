const { prompt } = require('inquirer');
const databaseQuery = require('./databaseQuery');

const nameNewDept = async () => {
    const departmentQuestion = {
        type: "input",
        name: "name",
        message: "Enter the name of the new department: ",
        validate: function(text) {
            const valid = text.match(/^[a-zA-Z\s]*$/);
            if (valid) {
                return true;
            }
            return "Please enter a valid name (letters and spaces only, no special characters)."
        }
    };
    return prompt(departmentQuestion);
};

const addDepartment = async () => {
    
	console.clear();
	
	const new_dept_query = `INSERT INTO department SET ?`;
	const departmentName = await nameNewDept();
	const newDepartment = await databaseQuery(new_dept_query, departmentName);

    console.clear();
	console.log(`\n   New department added. ID is ${newDepartment.insertId}` + `\n`);
};

module.exports = { addDepartment };