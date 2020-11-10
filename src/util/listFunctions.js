const {databaseQuery} = require('../lib/databaseQuery');

const listEmployees = async () => {

	const query = `
		SELECT id AS value, CONCAT(first_name, " ", last_name) AS name
		FROM employees
		ORDER BY id`;

	const employeesArray = await databaseQuery(query);
	return employeesArray;
};

const listRoles = async () => {

	const query = `
		SELECT id AS value, title AS name
		FROM role
		ORDER BY id`;

	const rolesArray = await databaseQuery(query);
	return rolesArray;
};

const listManagers = async () => {

	const manager_query = `
		SELECT id AS value, CONCAT(first_name, " ", last_name) AS name
		FROM employees
		WHERE ISNULL(manager_id)
		ORDER BY id
	`;

	const resultsArray = await databaseQuery(manager_query);
	return resultsArray;
};


const listDepartments = async () => {

	const dept_query = `
    SELECT id AS value, name
    FROM department
    ORDER BY id`;

	const resultsArray = await databaseQuery(dept_query);
	return resultsArray;
};

module.exports = { listEmployees, listRoles, listManagers, listDepartments };
