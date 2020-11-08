CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE employees (
    first_name VARCHAR(30);
    last_name VARCHAR(30);
    role_id INT NOT NULL, 
    manager_id INT, 
    PRIMARY KEY(id),
    FOREIGN KEY(role_id) REFERENCES role(id),
    FOREIGN KEY(manager_id) REFERENCES employees(id)
);

CREATE TABLE role (
    id AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(department_id) REFERENCES department(id)
);

CREATE TABLE department (
    id INT AUTO_INCREMENT, 
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);