INSERT INTO department (name)
VALUES ("Senate"), ("Council"), ("Diplomacy"), ("Knights");

INSERT INTO role (title, salary, department_id)
VALUES ("Senator", 55000, 1),
("Ambassador", 50000, 1),
("Jedi Master", 65000, 2),
("Padawan", 30000, 2),
("Jedi Knight", 60000, 3),
("Jedi Librarian", 40000, 3),
("Wayward Soul", 10000, 4),
("Jedi Sentinel", 60000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Qui Gon", "Jinn", 3, null),
("Mace", "Windu", 3, null),
("Obi Wan", "Kenobi", 3, null),
("Bail", "Organa", 1, null),
("Anakin", "Skywalker", 5, 3),
("Aayla", "Secura", 5, 2),
("Luke", "Skywalker", 2, 1),
("Leia", "Organa", 3, 4),
("Han", "Solo", 4, 4);