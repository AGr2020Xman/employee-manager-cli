const { prompt } = require('inquirer');
const connection = require('./index');
const conTable = require('console.table')
const { 
    departmentArray, 
    filterDepartmentArray, 
    roleArray, 
    filterRoleArray, 
    employeeArray, 
    managerArray 
} = require("./db_array");

const startMenu = () => {
    prompt([
        {
            type: "list",
            name: "operation",
            message: "What would you like to do? ",
            choices: [
                "ADD departments", 
                "ADD roles", 
                "ADD employees", 
                "VIEW departments", 
                "VIEW roles", 
                "VIEW employees", 
                "UPDATE employee",
                "Exit"
            ],
            loop: false
        }
    ]).then((answer)=>{
        switch (answer.operation) {
            case "ADD departments":
                addDepartment();
                break;
            case "ADD roles":
                addRoles();
                break;
            case "ADD employees":
                addEmployees();
                break; 
            case "VIEW departments":
                viewDepartment();
                break; 
            case "VIEW roles":
                viewRoles();
                break; 
            case "VIEW employees":
                viewEmployees();
                break; 
            case "UPDATE employee":
                updateEmployee();
                break;
            case "Exit":
                closeCLI();
                connection.end();
                break;
        }
    });
};

const addDepartment = () => {};
const addRoles = () => {};
const addEmployees = () => {};
const viewDepartment = () => {
    const query = "SELECT * FROM department ORDER BY department.id";
    connection.query(query, (err, res) => {
        if (err) throw err;
        departmentArray = [];
        res.forEach((row) => {
            let department = {
                id: row.id,
                name: row.name,
            };
            (departmentArray).push(department);
        })
        console.log('\n');
        console.table(departmentArray);
    })
    startMenu();
};

const viewRoles = () => {};
const viewEmployees = () => {};
const updateEmployee = () => {};
const closeCLI = () => {};

