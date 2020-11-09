const { prompt } = require('inquirer');

const startCLI = () => {
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
                addDepartment();
                break;
            case "ADD employees":
                addDepartment();
                break; 
            case "VIEW departments":
                viewDepartment();
                break; 
            case "VIEW roles":
                viewDepartment();
                break; 
            case "VIEW employees":
                viewDepartment();
                break; 
            case "UPDATE employee":
                addDepartment();
                break;
            case "Exit":
                closeCLI();
                break;
        }
    });
}