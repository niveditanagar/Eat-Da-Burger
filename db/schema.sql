### Schema

DROP DATABASE burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(80) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);

