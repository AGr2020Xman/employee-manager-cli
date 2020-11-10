const { prompt, Separator } = require('inquirer');
const connection = require('../lib/databaseQuery');
const { viewMethods } = require('../lib/viewElement');
const { addDepartment } = require('../lib/addDepartment');
const { addEmployee } = require('../lib/addEmployee');
const { addRole } = require('../lib/addRole');
const { deleteDepartment } = require('../lib/deleteDepartment');
const { deleteEmployee } = require('../lib/deleteEmployee');
const { deleteRole } = require('../lib/deleteRole');
const { updateEmployee } = require('../lib/updateEmployee');



const startMenu = async () => {
    // options menu layout
    const optionMenu = [
        new Separator("\n ───────── VIEW ──────────"),
        "VIEW employees",
        "VIEW departments", 
        "VIEW roles", 
        "VIEW employees by manager",
        "VIEW utilized budget by department",
        new Separator("\n ───────── ADD ──────────"),
        "ADD employee",
        "ADD department",
        "ADD role",
        new Separator("\n ───────── UPDATE ──────────"),
        "UPDATE employee",
        new Separator("\n ───────── Delete ──────────"),
        "DELETE employee",
        "DELETE department",
        "DELETE role",        
        new Separator("\n ───────────────────────────"),
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

    const answers = await prompt(openQuestion);
    
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
            case "ADD department":
                await addDepartment();
                break;
            case "ADD role":
                await addRole();
                break;
            case "ADD employee":
                await addEmployee();
                break; 
            case "UPDATE employee":
                await updateEmployee();
                break;
            case "DELETE employee":
                await deleteEmployee();
                break;
            case "DELETE role":
                await deleteRole();
                break;
            case "DELETE department":
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


