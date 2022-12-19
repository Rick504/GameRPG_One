-- DROP TABLE IF EXISTS "info_game";
-- DROP TABLE IF EXISTS "warriors";
-- DROP TABLE IF EXISTS "users";

CREATE TABLE "users" (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    "user_name" VARCHAR(45) UNIQUE NOT NULL,
    "email" VARCHAR(50) UNIQUE NOT NULL,
    "password" VARCHAR(150) NOT null,
    "origin" VARCHAR(20) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(user_id)
);

CREATE TABLE "warriors" ( 
    "id" INT, 
    "level_warrior" INT,
    "origin_warrior" VARCHAR(50),
    "warrior" VARCHAR(50), 
    "atk" INT NOT NULL,
    "def" INT NOT NULL,
  	PRIMARY KEY("id")
);

CREATE TABLE "info_game" (
	id_info_game serial UNIQUE,
	id_table_origin INT DEFAULT 1,
	"level" INT DEFAULT 1,
  "gold" INT DEFAULT 1,
  "supplies" INT DEFAULT 5,
  "wood" INT DEFAULT 5,
  "workers" INT DEFAULT 0,
  "armys" INT DEFAULT 2,
  "worker_producing_gold" INT DEFAULT 5,
  "worker_producing_supplies" INT DEFAULT 11,
  "worker_producing_wood" INT DEFAULT 2,
  "diamonds" INT DEFAULT 100,
  "clan" VARCHAR(30),
  "technology_points" INT DEFAULT 2,
  CONSTRAINT fk_users_info FOREIGN KEY(id_info_game)
  REFERENCES "users" (user_id) on delete cascade on update cascade,
  CONSTRAINT fk_info_game_origin FOREIGN KEY(id_table_origin)
  REFERENCES "warriors"(id) on delete cascade on update cascade
 );

INSERT INTO "warriors" VALUES (1, 1, 'Magic','Aprendizes de Eris', 9, 10);
INSERT INTO "warriors" VALUES (2, 2, 'Magic','Aprendizes de Remus', 11, 4);
INSERT INTO "warriors" VALUES (3, 3, 'Magic','Aprendizes de Wilfred', 20, 18);
INSERT INTO "warriors" VALUES (4, 4, 'Magic','Aprendizes de Garon', 21, 31);
INSERT INTO "warriors" VALUES (5, 5, 'Magic','Aprendizes de Jafar', 37, 28);
INSERT INTO "warriors" VALUES (6, 6, 'Magic','Magos de Kuron', 33, 38);
INSERT INTO "warriors" VALUES (7, 7, 'Magic','Magos de Relic', 65, 40);
INSERT INTO "warriors" VALUES (8, 8, 'Magic','Magos de Pierce', 70, 50);
INSERT INTO "warriors" VALUES (9, 9, 'Magic','Magos de Linus', 90, 88);
INSERT INTO "warriors" VALUES (10, 10,'Magic','Magos Supremos', 110, 100);
INSERT INTO "warriors" VALUES (11, 1, 'Researcher','Guerreiros do comandante Arzur', 10, 5);
INSERT INTO "warriors" VALUES (12, 2, 'Researcher','Guerreiros do comandante Cadman', 17, 16);
INSERT INTO "warriors" VALUES (13, 3, 'Researcher','Guerreiros do comandante Grannus', 23, 18);
INSERT INTO "warriors" VALUES (14, 4, 'Researcher','Guerreiros da comandante Hilda', 30, 25);
INSERT INTO "warriors" VALUES (15, 5, 'Researcher','Guerreiros do comandante Thyri', 35, 31);
INSERT INTO "warriors" VALUES (16, 6, 'Researcher','Guerreiros do comandante Alef', 40, 40);
INSERT INTO "warriors" VALUES (17, 7, 'Researcher','Guerreiros do comandante Kentigern', 46, 42);
INSERT INTO "warriors" VALUES (18, 8, 'Researcher','Guerreiros do comandante Eratos', 65, 58);
INSERT INTO "warriors" VALUES (19, 9, 'Researcher','Guerreiros do comandante Cingétorix', 87, 70);
INSERT INTO "warriors" VALUES (20, 10,'Researcher','Guerreiros ELITE', 105, 93);
INSERT INTO "warriors" VALUES (21, 1, 'War','Guerreiros do comandante Théos', 15, 10);
INSERT INTO "warriors" VALUES (22, 2, 'War','Guerreiros do comandante Rodger', 20, 16);
INSERT INTO "warriors" VALUES (23, 3, 'War','Guerreiros do comandante Magno', 25, 21);
INSERT INTO "warriors" VALUES (24, 4, 'War','Guerreiros do comandante Liam', 32, 30);
INSERT INTO "warriors" VALUES (25, 5, 'War','Guerreiros do comandante Apólo', 40, 35);
INSERT INTO "warriors" VALUES (26, 6, 'War','Guerreiros do comandante Dandara', 47, 42);
INSERT INTO "warriors" VALUES (27, 7, 'War','Guerreiros do comandante Celina', 60, 53);
INSERT INTO "warriors" VALUES (28, 8, 'War','Guerreiros do comandante Ícarus', 71, 66);
INSERT INTO "warriors" VALUES (29, 9, 'War','Guerreiros do comandante Orion', 90, 83);
INSERT INTO "warriors" VALUES (30, 10,'War','Guerreiros ELITE', 120, 101);

-- CONSTRAINTS
ALTER TABLE info_game
ADD CONSTRAINT Check_level CHECK ("level">=1 AND "level"<=10);

ALTER TABLE users 
ADD CONSTRAINT Check_origin CHECK ("origin" = 'Magic' OR "origin" = 'Researcher' or "origin" = 'War');

ALTER TABLE warriors
ADD CONSTRAINT Check_warriors CHECK ("id">=1 AND "id"<=30);