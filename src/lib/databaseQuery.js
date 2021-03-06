const mysql = require('mysql');
const { promisify } = require('util')

const databaseQuery = async (query, values) => {

    
    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "employee_tracker_db"
    });
    
    const promiseQuery = promisify(connection.query).bind(connection);
    const result = await promiseQuery(query, values)


    connection.end();
    return result;

};
    
module.exports = { databaseQuery };