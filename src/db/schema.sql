DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NULL,
    CONSTRAINT fk_department
        FOREIGN KEY(department_id) 
        REFERENCES department(id)
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NULL, 
    manager_id INT NULL,
    CONSTRAINT fk_role
        FOREIGN KEY (role_id) 
        REFERENCES role(id)
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT fk_manager
        FOREIGN KEY (manager_id) 
        REFERENCES employees(id)
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    PRIMARY KEY(id)
);