INSERT INTO department (name)
VALUES ("Senate"), ("Council"), ("Diplomacy"), ("Knights");

INSERT INTO role (title, salary, department_id)
VALUES ("Senator", 55000, 1),
("Jedi Master", 65000, 2),
("Jedi Knight", 60000, 3),
("Jedi Sentinel", 60000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Qui Gon", "Jinn", 1, null),
("Mace", "Windu", 2, null),
("Obi Wan", "Kenobi", 3, null),
("Anakin", "Skywalker", 4, null),
("Aayla", "Secura", 1, 4),
("Luke", "Skywalker", 2, 3),
("Leia", "Organa", 3, 2),
("Han", "Solo", 4, 1);