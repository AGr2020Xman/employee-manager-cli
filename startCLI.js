const { prompt, Separator } = require('inquirer');
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

const startMenu = async () => {
    // options menu layout
    const optionMenu = [
        new Separator("\n ───────── VIEW ──────────".green),
        " VIEW employees",
        " VIEW departments", 
        " VIEW roles", 
        " VIEW employees by manager",
        " VIEW utilized budget by department",
        new Separator("\n ───────── ADD ──────────".green),
        " ADD employee",
        " ADD department",
        " ADD role",
        new Separator("\n ───────── UPDATE ──────────".green),
        " UPDATE employee",
        new Separator("\n ───────── Delete ──────────".green),
        " DELETE employee",
        " DELETE department",
        " DELETE role",        
        new Separator("\n ───────────────────────────".green),
        " Exit",
        new Separator("\n"),                
    ];

    const openQuestion = [
        {
            type: "list",
            name: "operation",
            prefix: " ",
            message: "What would you like to do? ",
            choices: optionMenu,
            pageSize: 30,
            default: 0,
        }
    ]

    const answers = prompt(openQuestion);
    
        switch (answers.operation.trim()) {
            case "VIEW departments":
                viewDepartment();
                break; 
            case "VIEW roles":
                viewRoles();
                break; 
            case "VIEW employees":
                viewEmployees();
                break;
            case "VIEW employees by manager":
                viewEmployeesByManager();
                break;
            case "VIEW utilized budget by department":
                viewBudget();
                break;
            case "ADD departments":
                addDepartment();
                break;
            case "ADD roles":
                addRoles();
                break;
            case "ADD employees":
                addEmployees();
                break; 
            case "UPDATE employee":
                updateEmployee();
                break;
            case "Delete Employee":
                deleteEmployee();
                break;
            case "Delete Role":
                deleteRole();
                break;
            case "Delete Department":
                deleteDepartment();
                break;
            case "Exit":
                closeCLI();
                connection.end();
                break;
            default:
                console.clear();
                console.log("Bye!");
                return;
        }
        // default
        startMenu();
};



