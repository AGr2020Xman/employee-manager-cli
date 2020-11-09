const { prompt } = require('inquirer');
const databaseQuery = require('./index');
const conTable = require('console.table')

const viewDepartment = () => {
    const dept_query = `
        SELECT * 
        FROM department 
        ORDER BY department.name`;
    const resultsArray = databaseQuery(dept_query);
    console.table(resultsArray);
};

const viewRoles = () => {
    const roles_query = `
    SELECT
        role.title Role, role.id ID, role.salary Salary,
        department.name AS Department
    FROM role
    JOIN department ON (role.department_id = department.id)
    ORDER BY title`;
    const resultsArray = databaseQuery(roles_query);
    console.table(resultsArray);
};

const viewEmployees = () => {
    const employee_query = `
        SELECT 
            CONCAT(employees.first_name, " ", employees.last_name) Name, 
            employees.id ID,
            CONCAT(employees.first_name, " ", employees.last_name) Name, 
            role.title Role, 
            department.name Department,
            role.salary Salary,
            CONCAT(m.first_name, " ", m.last_name) Manager, 
        FROM employees
        LEFT JOIN employees m ON m.id = employees.manager_id
        JOIN role ON roles.id = employees.role_id
        JOIN departments ON roles.department_id=departments.id 
        ORDER BY Name`;
    const resultsArray = databaseQuery(employee_query);
    console.table(resultsArray);
};

const managerID = async () => {

	const manager_query = `
        SELECT 
            id Value, 
            CONCAT(first_name, " ", last_name) Name
		FROM employee
		WHERE ISNULL(manager_id)
		ORDER BY Name`;

	const managersResult = await databaseQuery(manager_query);

	// Configure inquirer parameters.
	const managerChoice = {
		type: "list",
		name: "id",
		message: "Choose a manager:\n",
		pageSize: 30,
		choices: managersResult,
	};

	// Return the employee id of the manager.
	const answers = await prompt(managerChoice);
	return answers.id;
}


const viewEmployeesByManager = () => {
    	console.clear();
		writeHeader("Employees by Manager");
		const managerID = await managerID();
		empman_query = `
            SELECT 
                CONCAT(employees.first_name, " ", employees.last_name) Name, 
                employees.id ID, 
                CONCAT(employees.first_name, " ", employees.last_name) Name, 
                role.title Role, 
                department.name Department, 
                CONCAT(m.first_name, " ", m.last_name) Manager, 
                role.salary Salary
			FROM employees
			LEFT JOIN employees m ON m.id = employees.manager_id
			JOIN role ON role.id = employees.role_id
			JOIN department ON department.id = role.department_id
			WHERE employees.manager_id = ${managerID}
            ORDER BY Name`;
            
        const resultsArray = databaseQuery(empman_query);
        console.table(resultsArray);
};

const viewBudget = () => {
    budget_query = `
        SELECT 
            department.name Department, 
            department.id ID, 
            SUM(role.salary) 'Utilised Budget'
		FROM employees
		JOIN role ON employees.role_id = role.id
		JOIN department ON role.department_id = department.id
		GROUP BY department.id
        ORDER BY Department`;
        
    const resultsArray = databaseQuery(budget_query);
    console.table(resultsArray);
};

module.exports = { viewEmployees, viewRoles, viewDepartment, viewEmployeesByManager, viewBudget };
