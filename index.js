const mysql = require('mysql');


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "H0n@s0up1234",
    database: "employee_tracker_db"
});

