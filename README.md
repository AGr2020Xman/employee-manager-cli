# Employee Tracker CLI

![badge](https://img.shields.io/badge/License-mit-green.svg)<br />

## Description

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as **C**ontent **M**anagement **S**ystems.

I've been challenged to architect and build a solution for managing a company's employees using node, inquirer, and MySQL. This has been achieved to the best of my abilities in the below application, allowing a user to interact with an employee tracking database. It allows the viewing, adding, deleting and updating for data in a clear easy to follow CLI.

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [User Story](#user-story)
- [Version 1 Feautures](#version-1-features)
- [Demonstration](#demonstration)
- [Screenshots](#screenshots)
- [Questions](<#questions-(FAQ)>)
- [Contact](#contact)
- [Author](#authors)
- [Acknowledgements](#acknowledgements)

## Installation

1. Clone this GitHub repository

```
  git clone https://github.com/AGr2020Xman/employee-manager-cli.git
```

2. Install all dependent npm packages.

```
npm install --save
```

3. Create the employee_tracker_db by running the script <addr>schema.sql</addr> and seeding mock data with the <addr>seeds.sql</addr> included in <a href="./src/db">db</a> folder.

4. Adjust root and password locations, as well as port in the databaseQuery.js file for your own servers.

## Usage

Ensure the following are correctly installed (if you have node already, make sure version is up to date):

- [Node.js](https://nodejs.org/en/)
- [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3)
- [MySQL](https://www.npmjs.com/package/mysql) NPM package to connect to your MySQL database and perform queries.
- [console.table](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

Run <addr>node start</addr> to run the application and choose from the prompted options to begin.
Add employees into roles & roles into departments for basic functionality!

## User Story

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

## Version 1 Features

- Add departments, roles, employees.
- View departments, roles, employees.
- Update employee roles.
- Update employee managers.
- View employees by manager.
- Delete departments, roles, and employees.
- View the total utilized budget of a department.

## Demonstration

- [Tutorial-Video](https://drive.google.com/file/d/1h8zwnRMBoQVshUisqUCIn8VMIVB6xJtl/view)

## Screenshots

_Initiate application with start choices_

![](./assets/initiate.JPG)

_Viewing tables_

![](./assets/viewing.JPG)

_Adding Employee_

![](./assets/adding.JPG)

_Updating Employee_

![](./assets/updating.JPG)

## Questions

- Submit questions to my contact details below.
- App runs in CLI.

## Contact

- Contact me with any questions on my email: agre.fun21@gmail.com or silver.grech@gmail.com

## Author

- Initial files to develop by Trilogy Education Services
- Andr&eacute; Grech - 10/11/2020

### Acknowledgements

- © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
