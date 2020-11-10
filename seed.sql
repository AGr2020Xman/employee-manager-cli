INSERT INTO department (name)
VALUES ("Senate"), ("Council"), ("Diplomacy"), ("Knights");

INSERT INTO role (title, salary, department_id)
VALUES ("Senator", 55000, 1),
("Jedi Master", 65000, 1),
("Jedi Knight", 60000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Qui Gon", "Jinn", 9, null),
("Mace", "Windu", 6, null),
("Obi Wan", "Kenobi", 2, null),
("Anakin", "Skywalker", 3, null),
("Aayla", "Secura", 4, 4),
("Luke", "Skywalker", 5, 4),
("Leia", "Organa", 1, 3),
("Han", "Solo", 7, 2);