DROP DATABASE IF EXISTS food_db;
CREATE DATABASE food_db;

USE food_db;

CREATE TABLE recipes(
  id INT NOT NULL AUTO_INCREMENT,
  recipes_name VARCHAR(45) NULL,
   PRIMARY KEY (id)
);

CREATE TABLE recipes_ingredents(
  id INT NOT NULL AUTO_INCREMENT,
  ingredent_name VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE ingredents(
  id INT NOT NULL AUTO_INCREMENT,
  nutrition VARCHAR(45) NULL,
  cost INTEGER NULL,
  PRIMARY KEY (id)
);