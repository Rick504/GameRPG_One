CREATE DATABASE First_game
USE First_game;

CREATE TABLE users ( 
    origin VARCHAR(20) NOT NULL,     
    id int NOT NULL AUTO_INCREMENT, 
    name VARCHAR(45) NOT NULL, 
    email VARCHAR(45) NOT NULL,
    password VARCHAR(150) NOT NULL,
    gold VARCHAR(10) NOT NULL DEFAULT '1',
    wood VARCHAR(10) NOT NULL DEFAULT '5',
    supplies VARCHAR(10) NOT NULL DEFAULT '8',
    army VARCHAR(10) NOT NULL DEFAULT '0',
    workers VARCHAR(10) NOT NULL DEFAULT '9',
    diamonds VARCHAR(10) NOT NULL DEFAULT '100',
    worker_producing_gold VARCHAR(20) NOT NULL DEFAULT '1',
    worker_producing_supplies VARCHAR(20) NOT NULL DEFAULT '1',
    worker_producing_wood VARCHAR(20) NOT NULL DEFAULT '1',
    level VARCHAR(2) NOT NULL DEFAULT '1',
    cla VARCHAR(30),
    PRIMARY KEY (id)
) DEFAULT CHARSET = utf8;

CREATE TABLE warriors_researcher ( 
    id int NOT NULL AUTO_INCREMENT, 
    warrior VARCHAR(20), 
    lvl int ,
    atk VARCHAR(3),
    def VARCHAR(3), 
    origin VARCHAR(15) DEFAULT 'Pesquisador', 
    total VARCHAR(10),
    PRIMARY KEY (id)
) DEFAULT CHARSET = utf8;

CREATE TABLE warriors_magic ( 
    id int NOT NULL AUTO_INCREMENT, 
    warrior VARCHAR(20), 
    lvl int ,
    atk VARCHAR(3),
    def VARCHAR(3), 
    origin VARCHAR(15) DEFAULT 'Magia', 
    total VARCHAR(10),
    PRIMARY KEY (id)
) DEFAULT CHARSET = utf8;

CREATE TABLE warriors_war ( 
    id int NOT NULL AUTO_INCREMENT, 
    warrior VARCHAR(20), 
    lvl int ,
    atk VARCHAR(3),
    def VARCHAR(3), 
    origin VARCHAR(15) DEFAULT 'Guerra', 
    total VARCHAR(10),
    PRIMARY KEY (id)
) DEFAULT CHARSET = utf8;

INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (1,'guerreiro-atk-1', 1,   '10', '5', 'Pesquisador', '0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (2,'guerreiro-def-1', 1,   '5', '10', 'Pesquisador', '0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (3,'guerreiro-atk-2', 2,   '17', '11', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (4,'guerreiro-def-2', 2,   '11', '17', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (5,'guerreiro-atk-3', 3,   '23', '18', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (6,'guerreiro-def-3', 3,   '18', '23', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (7,'guerreiro-atk-4', 4,   '30', '25', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (8,'guerreiro-def-4', 4,   '25', '30', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (9,'guerreiro-atk-5', 5,   '35', '31', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (10,'guerreiro-def-5',  5, '31', '35', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (11,'guerreiro-atk-6',  6, '40', '37', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (12,'guerreiro-def-6',  6, '37', '40', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (13,'guerreiro-atk-7',  7, '46', '42', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (14,'guerreiro-def-7',  7, '42', '46', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (15,'guerreiro-atk-8',  8, '65', '50', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (16,'guerreiro-def-8',  8, '50', '65', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (17,'guerreiro-atk-9',  9, '80', '70', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (18,'guerreiro-def-9',  9, '70', '80', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (19,'guerreiro-atk-10', 10,'100', '90', 'Pesquisador','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (20,'guerreiro-def-10', 10,'90', '100', 'Pesquisador','0');

INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (21,'guerreiro-atk-1', 1,  '8', '4', 'Magia', '0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (22,'guerreiro-def-1', 1,  '4', '8', 'Magia', '0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (23,'guerreiro-atk-2', 2,  '15', '10', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (24,'guerreiro-def-2', 2,  '10', '15', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (25,'guerreiro-atk-3', 3,  '20', '18', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (26,'guerreiro-def-3', 3,  '18', '20', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (27,'guerreiro-atk-4', 4,  '31', '21', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (28,'guerreiro-def-4', 4,  '21', '31', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (29,'guerreiro-atk-5', 5,  '33', '28', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (30,'guerreiro-def-5',  5, '28', '33', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (31,'guerreiro-atk-6',  6, '43', '28', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (32,'guerreiro-def-6',  6, '28', '43', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (33,'guerreiro-atk-7',  7, '65', '40', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (34,'guerreiro-def-7',  7, '40', '65', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (35,'guerreiro-atk-8',  8, '75', '50', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (36,'guerreiro-def-8',  8, '50', '75', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (37,'guerreiro-atk-9',  9, '90', '80', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (38,'guerreiro-def-9',  9, '80', '90', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (39,'guerreiro-atk-10', 10,'110', '100', 'Magia','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (40,'guerreiro-def-10', 10,'100', '110', 'Magia','0');

INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (41,'guerreiro-atk-1', 1,  '15', '10', 'Guerra', '0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (42,'guerreiro-def-1', 1,  '10', '15', 'Guerra', '0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (43,'guerreiro-atk-2', 2,  '20', '16', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (44,'guerreiro-def-2', 2,  '16', '20', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (45,'guerreiro-atk-3', 3,  '25', '21', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (46,'guerreiro-def-3', 3,  '21', '25', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (47,'guerreiro-atk-4', 4,  '32', '30', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (48,'guerreiro-def-4', 4,  '30', '32', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (49,'guerreiro-atk-5', 5,  '40', '35', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (50,'guerreiro-def-5',  5, '35', '40', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (51,'guerreiro-atk-6',  6, '47', '42', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (52,'guerreiro-def-6',  6, '42', '47', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (53,'guerreiro-atk-7',  7, '60', '53', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (54,'guerreiro-def-7',  7, '53', '60', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (55,'guerreiro-atk-8',  8, '71', '66', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (56,'guerreiro-def-8',  8, '66', '71', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (57,'guerreiro-atk-9',  9, '85', '80', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (58,'guerreiro-def-9',  9, '80', '85', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (59,'guerreiro-atk-10', 10,'105', '98', 'Guerra','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (60,'guerreiro-def-10', 10,'98', '105', 'Guerra','0');