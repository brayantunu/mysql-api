CREATE DATABASE IF NOT EXISTS companydb;
use companydb
CREATE TABLE employe (
    id INT(20) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT DEFAULT NULL, 
    PRIMARY KEY (id)
);

DESCRIBE employe

INSERT INTO employe values
(1,'jow',1000),
(2,'jow',1000),
(3,'jow',1000),
(4,'jow',1000),