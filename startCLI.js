const { prompt, Separator } = require('inquirer');
const connection = require('./databaseQuery');
const { viewMethods } = require('./viewElement');
const { addDepartment } = require('./addDepartment');
const { addEmployee } = require('./addEmployee');
const { addRole } = require('./addRole');
const { deleteDepartment } = require('./deleteDepartment');
const { deleteEmployee } = require('./deleteEmployee');
const { deleteRole } = require('./deleteRole');
const { updateEmployee } = require('./updateEmployee');



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
            case "Delete employee":
                await deleteEmployee();
                break;
            case "Delete role":
                await deleteRole();
                break;
            case "Delete department":
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


