CREATE TABLE IF NOT EXISTS users (
    id serial NOT NULL PRIMARY KEY,
    u_name varchar(45) UNIQUE NOT NULL,
    email varchar(50) UNIQUE NOT NULL,
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
    id_army INT DEFAULT 1
);

CREATE TABLE IF NOT EXISTS warriors_researcher ( 
    id INT PRIMARY KEY, 
    warrior VARCHAR(50), 
    level INT NOT NULL,
    atk INT NOT NULL,
    def INT NOT NULL
);

INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (1,'Guerreiros do comandante Arzur de Atk', 1, 10, 5);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (2,'Guerreiros do comandante Arzur de Def', 1, 5, 10);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (3,'Guerreiros do comandante Cadman de Atk', 2, 17, 11);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (4,'Guerreiros do comandante Cadman de Def', 2, 11, 17);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (5,'Guerreiros do comandante Grannus de Atk', 3, 23, 18);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (6,'Guerreiros do comandante Grannus de Def', 3, 18, 23);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (7,'Guerreiros da comandante Hilda de Atk', 4, 30, 25);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (8,'Guerreiros da comandante Hilda de Def', 4, 25, 30);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (9,'Guerreiros do comandante Thyri de Atk', 5, 35, 31);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (10,'Guerreiros do comandante Thyri de Def', 5, 31, 35);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (11,'Guerreiros do comandante Alef de Atk', 6, 40, 37);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (12,'Guerreiros do comandante Alef de Def', 6, 37, 40);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (13,'Guerreiros do comandante Kentigern de Atk', 7, 46, 42);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (14,'Guerreiros do comandante Kentigern de Def', 7, 42, 46);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (15,'Guerreiros do comandante Eratos de Atk', 8, 65, 50);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (16,'Guerreiros do comandante Eratos de Def', 8, 50, 65);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (17,'Guerreiros do comandante Cingétorix de Atk', 9, 80, 70);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (18,'Guerreiros do comandante Cingétorix de Def', 9, 70, 80);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (19,'Guerreiros ELITE de Atk', 10, 100, 90);
INSERT INTO warriors_researcher (id,warrior,level,atk,def) values (20,'Guerreiros ELITE de Def', 10, 90, 100);

CREATE TABLE IF NOT EXISTS warriors_magic ( 
    id INT PRIMARY KEY, 
    warrior VARCHAR(50), 
    level INT NOT NULL,
    atk INT NOT NULL,
    def INT NOT NULL
);

INSERT INTO warriors_magic (id,warrior,level,atk,def) values (1,'Aprendizes de Eris Atk', 1,  9, 8);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (2,'Aprendizes de Eris Def', 1,  8, 10);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (3,'Aprendizes de Remus Atk', 2,  11, 4);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (4,'Aprendizes de Remus Def', 2,  9, 15);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (5,'Aprendizes de Wilfred Atk', 3,  20, 18);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (6,'Aprendizes de Wilfred Def', 3,  18, 20);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (7,'Aprendizes de Garon Atk', 4,  31, 21);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (8,'Aprendizes de Garon Def', 4,  21, 31);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (9,'Aprendizes de Jafar Atk', 5,  37, 28);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (10,'Aprendizes de Jafar Def',  5, 28, 37);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (11,'Magos de Kuron Atk',  6, 43, 28);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (12,'Magos de Kuron Def',  6, 28, 43);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (13,'Magos de Relic Atk',  7, 65, 40);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (14,'Magos de Relic Def',  7, 40, 65);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (15,'Magos de Pierce Atk',  8, 70, 50);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (16,'Magos de Pierce Def',  8, 50, 70);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (17,'Magos de Linus Atk',  9, 90, 80);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (18,'Magos de Linus Def',  9, 80, 90);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (19,'Magos Supremos Atk', 10,110, 100);
INSERT INTO warriors_magic (id,warrior,level,atk,def) values (20,'Magos Supremos Def', 10,100, 110);

CREATE TABLE IF NOT EXISTS warriors_war ( 
    id INT PRIMARY KEY, 
    warrior VARCHAR(50), 
    level INT NOT NULL,
    atk INT NOT NULL,
    def INT NOT NULL
);

INSERT INTO warriors_war (id,warrior,level,atk,def) values (1,'Guerreiros do comandante Théos de Atk', 1,  15, 10);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (2,'Guerreiros do comandante Théos de Def', 1,  10, 15);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (3,'Guerreiros do comandante Rodger de Atk', 2,  20, 16);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (4,'Guerreiros do comandante Rodger de Def', 2,  16, 20);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (5,'Guerreiros do comandante Magno de Atk', 3,  25, 21);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (6,'Guerreiros do comandante Magno de Def', 3,  21, 25);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (7,'Guerreiros do comandante Liam de Atk', 4,  32, 30);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (8,'Guerreiros do comandante Liam de Def', 4,  30, 32);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (9,'Guerreiros do comandante Apólo de Atk', 5,  40, 35);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (10,'Guerreiros do comandante Apólo de Def',  5, 35, 40);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (11,'Guerreiros do comandante Dandara de Atk',  6, 47, 42);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (12,'Guerreiros do comandante Dandara de Def',  6, 42, 47);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (13,'Guerreiros do comandante Celina de Atk',  7, 60, 53);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (14,'Guerreiros do comandante Celina de Def',  7, 53, 60);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (15,'Guerreiros do comandante Ícarus de Atk',  8, 71, 66);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (16,'Guerreiros do comandante Ícarus de Def',  8, 66, 71);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (17,'Guerreiros do comandante Orion de Atk',  9, 85, 80);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (18,'Guerreiros do comandante Orion de Def',  9, 80, 85);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (19,'Guerreiros do ELITE de Atk', 10,105, 98);
INSERT INTO warriors_war (id,warrior,level,atk,def) values (20,'Guerreiros do ELITE de Def', 10,98, 105);