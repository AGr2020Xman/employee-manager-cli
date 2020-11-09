const mysql = require('mysql');
const { prompt } = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "H0n@s0up1234",
    database: "employee_tracker_db"
});

connection.connect((err) => {
    if (err) throw err;
})