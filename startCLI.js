const { prompt, Separator } = require('inquirer');
const connection = require('./databaseQuery');
const { viewMethods } = require('./viewElement');

const startMenu = async () => {
    // options menu layout
    const optionMenu = [
        new Separator("\n ───────── VIEW ──────────".green),
        "VIEW employees",
        "VIEW departments", 
        "VIEW roles", 
        "VIEW employees by manager",
        "VIEW utilized budget by department",
        new Separator("\n ───────── ADD ──────────".green),
        "ADD employee",
        "ADD department",
        "ADD role",
        new Separator("\n ───────── UPDATE ──────────".green),
        "UPDATE employee",
        new Separator("\n ───────── Delete ──────────".green),
        "DELETE employee",
        "DELETE department",
        "DELETE role",        
        new Separator("\n ───────────────────────────".green),
        "Exit",
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
    
        switch (answers.operation) {
            case "VIEW departments":
                await viewMethods('department');
                break; 
            case "VIEW roles":
                await viewMethods('roles');
                break; 
            case "VIEW employees":
                await viewMethods('employees');
                break;
            case "VIEW employees by manager":
                await viewMethods('manager');
                break;
            case "VIEW utilized budget by department":
                await viewMethods('budget');
                break;
            case "ADD departments":
                await addDepartment();
                break;
            case "ADD roles":
                await addRoles();
                break;
            case "ADD employees":
                await addEmployees();
                break; 
            case "UPDATE employee":
                await updateEmployee();
                break;
            case "Delete Employee":
                await deleteEmployee();
                break;
            case "Delete Role":
                await deleteRole();
                break;
            case "Delete Department":
                await deleteDepartment();
                break;
            default:
                console.clear();
                console.log("Bye!");
                return;
        }
        // default
        startMenu();
};

module.exports = { startMenu };


