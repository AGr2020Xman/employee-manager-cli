
const databaseQuery = require('./index');

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

const viewEmployeesByManager = () => {

};

const viewBudget = () => {

};
