-- table users
CREATE TABLE IF NOT EXISTS users (
    id serial NOT NULL,
    u_name varchar(45) NOT NULL,
    email varchar(45) NOT NULL,
    password varchar(150) NOT NULL,
    origin varchar(20) NOT NULL,
    gold varchar(10) DEFAULT 1 NOT NULL,
    wood varchar(10) DEFAULT 5 NOT NULL,
    supplies varchar(10) DEFAULT 5 NOT NULL,
    workers varchar(10) DEFAULT 0 NOT NULL,
    diamonds varchar(10) DEFAULT 100 NOT NULL,
    worker_producing_gold varchar(4) DEFAULT 5 NOT NULL,
    worker_producing_supplies varchar(4) DEFAULT 11 NOT NULL,
    worker_producing_wood varchar(4) DEFAULT 2 NOT NULL,
    level varchar(2) DEFAULT 1 NOT NULL,
    cla varchar(30),
    tech_points varchar(2) DEFAULT 2 NOT NULL,
    PRIMARY KEY (id)
);

--------------Tabela origem Pesquisador
CREATE TABLE warriors_researcher ( 
    id serial NOT NULL, 
    warrior VARCHAR(20), 
    lvl int ,
    atk VARCHAR(3),
    def VARCHAR(3), 
    origin VARCHAR(15) DEFAULT 'Researcher', 
    total VARCHAR(10),
    PRIMARY KEY (id)
);

INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (1,'guerreiro-atk-1', 1,   '10', '5', 'Researcher', '0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (2,'guerreiro-def-1', 1,   '5', '10', 'Researcher', '0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (3,'guerreiro-atk-2', 2,   '17', '11', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (4,'guerreiro-def-2', 2,   '11', '17', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (5,'guerreiro-atk-3', 3,   '23', '18', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (6,'guerreiro-def-3', 3,   '18', '23', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (7,'guerreiro-atk-4', 4,   '30', '25', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (8,'guerreiro-def-4', 4,   '25', '30', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (9,'guerreiro-atk-5', 5,   '35', '31', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (10,'guerreiro-def-5',  5, '31', '35', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (11,'guerreiro-atk-6',  6, '40', '37', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (12,'guerreiro-def-6',  6, '37', '40', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (13,'guerreiro-atk-7',  7, '46', '42', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (14,'guerreiro-def-7',  7, '42', '46', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (15,'guerreiro-atk-8',  8, '65', '50', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (16,'guerreiro-def-8',  8, '50', '65', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (17,'guerreiro-atk-9',  9, '80', '70', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (18,'guerreiro-def-9',  9, '70', '80', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (19,'guerreiro-atk-10', 10,'100', '90', 'Researcher','0');
INSERT INTO warriors_researcher (id,warrior,lvl,atk,def,origin, total) values (20,'guerreiro-def-10', 10,'90', '100', 'Researcher','0');

--------------Tabela origem Magico
CREATE TABLE warriors_magic ( 
    id serial NOT NULL, 
    warrior VARCHAR(20), 
    lvl int ,
    atk VARCHAR(3),
    def VARCHAR(3), 
    origin VARCHAR(15) DEFAULT 'Magic', 
    total VARCHAR(10),
    PRIMARY KEY (id)
);

INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (21,'guerreiro-atk-1', 1,  '8', '4', 'Magic', '0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (22,'guerreiro-def-1', 1,  '4', '8', 'Magic', '0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (23,'guerreiro-atk-2', 2,  '15', '10', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (24,'guerreiro-def-2', 2,  '10', '15', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (25,'guerreiro-atk-3', 3,  '20', '18', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (26,'guerreiro-def-3', 3,  '18', '20', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (27,'guerreiro-atk-4', 4,  '31', '21', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (28,'guerreiro-def-4', 4,  '21', '31', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (29,'guerreiro-atk-5', 5,  '33', '28', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (30,'guerreiro-def-5',  5, '28', '33', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (31,'guerreiro-atk-6',  6, '43', '28', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (32,'guerreiro-def-6',  6, '28', '43', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (33,'guerreiro-atk-7',  7, '65', '40', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (34,'guerreiro-def-7',  7, '40', '65', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (35,'guerreiro-atk-8',  8, '75', '50', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (36,'guerreiro-def-8',  8, '50', '75', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (37,'guerreiro-atk-9',  9, '90', '80', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (38,'guerreiro-def-9',  9, '80', '90', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (39,'guerreiro-atk-10', 10,'110', '100', 'Magic','0');
INSERT INTO warriors_magic (id,warrior,lvl,atk,def,origin, total) values (40,'guerreiro-def-10', 10,'100', '110', 'Magic','0');

--------------Tabela origem Guerra
CREATE TABLE warriors_war ( 
    id serial NOT NULL, 
    warrior VARCHAR(20), 
    lvl int ,
    atk VARCHAR(3),
    def VARCHAR(3), 
    origin VARCHAR(15) DEFAULT 'War', 
    total VARCHAR(10),
    PRIMARY KEY (id)
);

INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (41,'guerreiro-atk-1', 1,  '15', '10', 'War', '0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (42,'guerreiro-def-1', 1,  '10', '15', 'War', '0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (43,'guerreiro-atk-2', 2,  '20', '16', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (44,'guerreiro-def-2', 2,  '16', '20', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (45,'guerreiro-atk-3', 3,  '25', '21', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (46,'guerreiro-def-3', 3,  '21', '25', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (47,'guerreiro-atk-4', 4,  '32', '30', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (48,'guerreiro-def-4', 4,  '30', '32', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (49,'guerreiro-atk-5', 5,  '40', '35', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (50,'guerreiro-def-5',  5, '35', '40', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (51,'guerreiro-atk-6',  6, '47', '42', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (52,'guerreiro-def-6',  6, '42', '47', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (53,'guerreiro-atk-7',  7, '60', '53', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (54,'guerreiro-def-7',  7, '53', '60', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (55,'guerreiro-atk-8',  8, '71', '66', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (56,'guerreiro-def-8',  8, '66', '71', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (57,'guerreiro-atk-9',  9, '85', '80', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (58,'guerreiro-def-9',  9, '80', '85', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (59,'guerreiro-atk-10', 10,'105', '98', 'War','0');
INSERT INTO warriors_war (id,warrior,lvl,atk,def,origin, total) values (60,'guerreiro-def-10', 10,'98', '105', 'War','0');