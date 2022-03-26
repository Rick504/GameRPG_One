-- DROP TABLE IF EXISTS "warriors_magic";
-- DROP TABLE IF EXISTS "warriors_researcher";
-- DROP TABLE IF EXISTS "warriors_war";
-- DROP TABLE IF EXISTS "info_game";
-- DROP TABLE IF EXISTS "users";

CREATE TABLE "users" (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    "user_name" VARCHAR(45) UNIQUE NOT NULL,
    "email" VARCHAR(50) UNIQUE NOT NULL,
    "password" VARCHAR(150) NOT null,
    PRIMARY KEY(user_id)
);

CREATE TABLE "info_game" (
	  id_info_game serial UNIQUE,
    "origin" VARCHAR(20) NOT NULL,
    "gold" INT DEFAULT 1,
    "supplies" INT DEFAULT 5,
    "wood" INT DEFAULT 5,
    "workers" INT DEFAULT 0,
    "armys" INT DEFAULT 2,
    "worker_producing_gold" INT DEFAULT 5,
    "worker_producing_supplies" INT DEFAULT 11,
    "worker_producing_wood" INT DEFAULT 2,
    "diamonds" INT DEFAULT 100,
    "level" INT DEFAULT 1,
    "clan" VARCHAR(30),
    "technology_points" INT DEFAULT 2,
    "id_table_origin" INT DEFAULT 1,
  	CONSTRAINT fk_users_info FOREIGN KEY(id_info_game) 
	  REFERENCES "users" (user_id) 
    on delete cascade on update cascade 
 );

CREATE TABLE "warriors_magic" ( 
    "id" INT, 
    "warrior" VARCHAR(50), 
    "atk" INT NOT NULL,
    "def" INT NOT NULL,
  	PRIMARY KEY("id")
);

INSERT INTO "warriors_magic" (id,"warrior","atk","def") values (1,'Aprendizes de Eris', 9, 10);
INSERT INTO "warriors_magic" (id,"warrior","atk","def") values (2,'Aprendizes de Remus', 11, 4);
INSERT INTO "warriors_magic" (id,"warrior","atk","def") values (3,'Aprendizes de Wilfred', 20, 18);
INSERT INTO "warriors_magic" (id,"warrior","atk","def") values (4,'Aprendizes de Garon', 21, 31);
INSERT INTO "warriors_magic" (id,"warrior","atk","def") values (5,'Aprendizes de Jafar', 37, 28);
INSERT INTO "warriors_magic" (id,"warrior","atk","def") values (6,'Magos de Kuron', 33, 38);
INSERT INTO "warriors_magic" (id,"warrior","atk","def") values (7,'Magos de Relic', 65, 40);
INSERT INTO "warriors_magic" (id,"warrior","atk","def") values (8,'Magos de Pierce', 70, 50);
INSERT INTO "warriors_magic" (id,"warrior","atk","def") values (9,'Magos de Linus', 90, 88);
INSERT INTO "warriors_magic" (id,"warrior","atk","def") values (10,'Magos Supremos', 110, 100);

CREATE TABLE "warriors_researcher" ( 
    "id" INT, 
    "warrior" VARCHAR(50), 
    "atk" INT NOT NULL,
    "def" INT NOT NULL,
  	PRIMARY KEY("id")
);

INSERT INTO "warriors_researcher" (id,"warrior","atk","def") values (1,'Guerreiros do comandante Arzur', 10, 5);
INSERT INTO "warriors_researcher" (id,"warrior","atk","def") values (2,'Guerreiros do comandante Cadman', 17, 16);
INSERT INTO "warriors_researcher" (id,"warrior","atk","def") values (3,'Guerreiros do comandante Grannus', 23, 18);
INSERT INTO "warriors_researcher" (id,"warrior","atk","def") values (4,'Guerreiros da comandante Hilda', 30, 25);
INSERT INTO "warriors_researcher" (id,"warrior","atk","def") values (5,'Guerreiros do comandante Thyri', 35, 31);
INSERT INTO "warriors_researcher" (id,"warrior","atk","def") values (6,'Guerreiros do comandante Alef', 40, 40);
INSERT INTO "warriors_researcher" (id,"warrior","atk","def") values (7,'Guerreiros do comandante Kentigern', 46, 42);
INSERT INTO "warriors_researcher" (id,"warrior","atk","def") values (8,'Guerreiros do comandante Eratos', 65, 58);
INSERT INTO "warriors_researcher" (id,"warrior","atk","def") values (9,'Guerreiros do comandante Cingétorix', 87, 70);
INSERT INTO "warriors_researcher" (id,"warrior","atk","def") values (10,'Guerreiros ELITE', 105, 93);

CREATE TABLE "warriors_war" ( 
    "id" INT, 
    "warrior" VARCHAR(50), 
    "atk" INT NOT NULL,
    "def" INT NOT NULL,
  	PRIMARY KEY("id")
);

INSERT INTO "warriors_war" (id,"warrior","atk","def") values (1,'Guerreiros do comandante Théos', 15, 10);
INSERT INTO "warriors_war" (id,"warrior","atk","def") values (2,'Guerreiros do comandante Rodger', 20, 16);
INSERT INTO "warriors_war" (id,"warrior","atk","def") values (3,'Guerreiros do comandante Magno', 25, 21);
INSERT INTO "warriors_war" (id,"warrior","atk","def") values (4,'Guerreiros do comandante Liam', 32, 30);
INSERT INTO "warriors_war" (id,"warrior","atk","def") values (5,'Guerreiros do comandante Apólo', 40, 35);
INSERT INTO "warriors_war" (id,"warrior","atk","def") values (6,'Guerreiros do comandante Dandara', 47, 42);
INSERT INTO "warriors_war" (id,"warrior","atk","def") values (7,'Guerreiros do comandante Celina', 60, 53);
INSERT INTO "warriors_war" (id,"warrior","atk","def") values (8,'Guerreiros do comandante Ícarus', 71, 66);
INSERT INTO "warriors_war" (id,"warrior","atk","def") values (9,'Guerreiros do comandante Orion', 90, 83);
INSERT INTO "warriors_war" (id,"warrior","atk","def") values (10,'Guerreiros ELITE', 120, 101);