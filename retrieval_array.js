
const connection = require('./index');

const roleRetrieve = () => new Promise((resolve, reject) => {
    const role_query = `SELECT id AS value, title AS name FROM role ORDER BY id`;
    connection.query(role_query, (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(res);
    });
  });


  const managerRetrieve = () => new Promise(function (resolve, reject) {
    const manager_query = `SELECT id AS value, CONCAT(first_name, " ", last_name) AS name FROM employees WHERE ISNULL(manager_id) ORDER BY id`;
    connection.query(manager_query, (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(res);
    });
  });


  const departmentRetrieve = () => new Promise(function (resolve, reject) {
    const department_query = `SELECT id AS value, name AS name FROM departments ORDER BY id`;
    connection.query(department_query, (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(res);
    });
  });


  const employeeRetrieve = () => new Promise(function (resolve, reject) {
    const employee_query = `SELECT id AS value, CONCAT(first_name, " ", last_name) AS name FROM employees ORDER BY id`;
    connection.query(employee_query, (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(res);
    });
  });

  module.exports = { roleRetrieve, managerRetrieve, departmentRetrieve, employeeRetrieve }