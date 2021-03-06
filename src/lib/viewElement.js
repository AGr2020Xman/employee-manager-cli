const { prompt } = require('inquirer');
const { databaseQuery } = require('./databaseQuery');
const conTable = require('console.table');

const managerID = async () => {
	const manager_query = `
        SELECT 
            id Value, 
            CONCAT(first_name, " ", last_name) Name
		FROM employees
		WHERE ISNULL(manager_id)
		ORDER BY id`;

    const managersResult = await databaseQuery(manager_query);
    
    const unpackRowPacket = managersResult.map((manager) => ({value: manager.Value, name: manager.Name}));

	const managerChoice = {
		type: "list",
		name: "id",
		message: "Choose a manager:\n",
		pageSize: 30,
		choices: [...unpackRowPacket, 'Go back']
    };
    
    const answers = await prompt(managerChoice);
    
    return answers.id;
};

const viewMethods = async (viewCategory) => {
    switch (viewCategory) {
        case "department":
            await viewDepartment();            
            break;
        case "roles":
            await viewRoles();
            break;
        case "employees":
            await viewEmployees();
            break;
        case "manager":
            await viewEmployeesByManager();
            break;
        case "budget":
            await viewBudget();
            break;
    }
};

const viewDepartment = async () => {
    const dept_query = `
        SELECT * 
        FROM department 
        ORDER BY department.name`;
    const resultsArray = await databaseQuery(dept_query);
    console.table('\nDepartments',resultsArray);
};

const viewRoles = async () => {
    const roles_query = `
    SELECT
        role.title Role, role.id ID, role.salary Salary,
        department.name AS Department
    FROM role
    JOIN department ON (role.department_id = department.id)
    ORDER BY title`;
    const resultsArray = await databaseQuery(roles_query);
    console.table('\nRoles',resultsArray);
};

const viewEmployees = async () => {
    const employee_query = `
    SELECT 
	    CONCAT(employees.first_name, " ", employees.last_name) Name, 
	    employees.id ID,
	    role.title Role, 
	    department.name Department,
	    role.salary Salary,
	    CONCAT(managers.first_name, " ", managers.last_name) Manager  
    FROM employees
    INNER JOIN role ON role.id = employees.role_id
    INNER JOIN department ON role.department_id=department.id 
    LEFT JOIN employees managers ON managers.id = employees.manager_id
    ORDER BY Name
    `;

    const resultsArray = await databaseQuery(employee_query);
    console.table('\nEmployees', resultsArray);
};

const viewEmployeesByManager = async () => {
        console.clear();
        const { startMenu } = require('../util/startCLI');
        const managerId = await managerID();
        if (managerId === 'Go back'){
            startMenu();
        }
		const empman_query = `
            SELECT 
                CONCAT(employees.first_name, " ", employees.last_name) Name, 
                employees.id ID, 
                CONCAT(employees.first_name, " ", employees.last_name) Name, 
                role.title Role, 
                department.name Department, 
                CONCAT(managers.first_name, " ", managers.last_name) Manager, 
                role.salary Salary
			FROM employees
			LEFT JOIN employees managers ON managers.id = employees.manager_id
			JOIN role ON role.id = employees.role_id
			JOIN department ON department.id = role.department_id
			WHERE employees.manager_id = ${managerId}
            ORDER BY Name`;
            
        const resultsArray = await databaseQuery(empman_query);
        console.table('\nEmployees with selected manager', resultsArray);
};

const viewBudget = async () => {
    const budget_query = `
        SELECT 
            department.name Department, 
            department.id ID, 
            SUM(role.salary) 'Utilised Budget'
		FROM employees
		JOIN role ON employees.role_id = role.id
		JOIN department ON role.department_id = department.id
		GROUP BY department.id
        ORDER BY Department`;
        
    const resultsArray = await databaseQuery(budget_query);
    console.table('\nUtilised Budget', resultsArray);
};

module.exports = { viewMethods };
