-- ("level" BETWEEN 1 ADD 10) aceita somente numeros entre 1 e 10
-- serial - gerado automaticamente
-- Primary Key (chave unica que não pode se repetir)
-- GENERATED ALWAYS instrui o PostgreSQL a sempre gerar um valor para a coluna de identidade. Se você tentar inserir (ou atualizar) valores na GENERATED ALWAYS AS IDENTITYcoluna, o PostgreSQL emitirá um erro.
-- ON DELETE CASCADE é para especificar se você deseja que as linhas sejam excluídas em uma tabela filho quando as linhas correspondentes forem excluídas na tabela pai. Se você não especificar exclusões em cascata, o comportamento padrão do servidor de banco de dados impedirá que você exclua dados em uma tabela se outras tabelas fizerem referência a eles.

CREATE TABLE "users" (
    user_id VARCHAR(40),
    "user_name" VARCHAR(45) UNIQUE NOT NULL,
    "email" VARCHAR(50) UNIQUE NOT NULL,
    "password" VARCHAR(150) NOT null,
    "origin" VARCHAR(20) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(user_id)
);

CREATE TABLE "info_game" (
	id VARCHAR(40),
	"level" INT DEFAULT 1,
    "gold" INT DEFAULT 1,
    "supplies" INT DEFAULT 5,
    "wood" INT DEFAULT 5,
    "workers" INT DEFAULT 0,
    "armys" INT DEFAULT 2,
    "warriors_lvl_1" INT DEFAULT 0,
    "warriors_lvl_2" INT DEFAULT 0,
    "warriors_lvl_3" INT DEFAULT 0,
    "warriors_lvl_4" INT DEFAULT 0,
    "warriors_lvl_5" INT DEFAULT 0,
    "warriors_lvl_6" INT DEFAULT 0,
    "warriors_lvl_7" INT DEFAULT 0,
    "warriors_lvl_8" INT DEFAULT 0,
    "warriors_lvl_9" INT DEFAULT 0,
    "warriors_lvl_10" INT DEFAULT 0,
    "worker_producing_gold" INT DEFAULT 5,
    "worker_producing_supplies" INT DEFAULT 11,
    "worker_producing_wood" INT DEFAULT 2,
    "diamonds" INT DEFAULT 100,
    "clan" VARCHAR(30),
    "technology_points" INT DEFAULT 2,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    FOREIGN KEY(id) REFERENCES "users"(user_id) on delete cascade on update cascade
);

CREATE TABLE "warriors_magic" (
    id INT,
    "warrior_level" INT,
    "warrior_name" VARCHAR(50),
    "atk" INT NOT NULL,
    "def" INT NOT NULL,
  	PRIMARY KEY(id)
);

CREATE TABLE "warriors_researcher" (
    id INT,
    "warrior_level" INT,
    "warrior_name" VARCHAR(50),
    "atk" INT NOT NULL,
    "def" INT NOT NULL,
  	PRIMARY KEY(id)
);

CREATE TABLE "warriors_war" (
    id INT,
    "warrior_level" INT,
    "warrior_name" VARCHAR(50),
    "atk" INT NOT NULL,
    "def" INT NOT NULL,
  	PRIMARY KEY(id)
);

CREATE TABLE "training_troops" (
    id VARCHAR(40),
    "shifts" INT,
    "total" INT,
  	FOREIGN KEY(id) REFERENCES "users"(user_id) on delete cascade on update cascade
);

CREATE TABLE "preparing_workers" (
    id VARCHAR(40),
    "shifts" INT,
    "total" INT,
  	FOREIGN KEY(id) REFERENCES "users"(user_id) on delete cascade on update cascade
);

INSERT INTO "warriors_magic" VALUES (1, 1,'Aprendizes de Eris', 9, 10);
INSERT INTO "warriors_magic" VALUES (2, 2,'Aprendizes de Remus', 11, 4);
INSERT INTO "warriors_magic" VALUES (3, 3,'Aprendizes de Wilfred', 20, 18);
INSERT INTO "warriors_magic" VALUES (4, 4,'Aprendizes de Garon', 21, 31);
INSERT INTO "warriors_magic" VALUES (5, 5,'Aprendizes de Jafar', 37, 28);
INSERT INTO "warriors_magic" VALUES (6, 6,'Magos de Kuron', 33, 38);
INSERT INTO "warriors_magic" VALUES (7, 7,'Magos de Relic', 65, 40);
INSERT INTO "warriors_magic" VALUES (8, 8,'Magos de Pierce', 70, 50);
INSERT INTO "warriors_magic" VALUES (9, 9,'Magos de Linus', 90, 88);
INSERT INTO "warriors_magic" VALUES (10, 10,'Magos Supremos', 110, 100);
INSERT INTO "warriors_researcher" VALUES (1, 1,'Guerreiros do comandante Arzur', 10, 5);
INSERT INTO "warriors_researcher" VALUES (2, 2,'Guerreiros do comandante Cadman', 17, 16);
INSERT INTO "warriors_researcher" VALUES (3, 3,'Guerreiros do comandante Grannus', 23, 18);
INSERT INTO "warriors_researcher" VALUES (4, 4,'Guerreiros da comandante Hilda', 30, 25);
INSERT INTO "warriors_researcher" VALUES (5, 5,'Guerreiros do comandante Thyri', 35, 31);
INSERT INTO "warriors_researcher" VALUES (6, 6,'Guerreiros do comandante Alef', 40, 40);
INSERT INTO "warriors_researcher" VALUES (7, 7,'Guerreiros do comandante Kentigern', 46, 42);
INSERT INTO "warriors_researcher" VALUES (8, 8,'Guerreiros do comandante Eratos', 65, 58);
INSERT INTO "warriors_researcher" VALUES (9, 9,'Guerreiros do comandante Cingétorix', 87, 70);
INSERT INTO "warriors_researcher" VALUES (10, 10,'Guerreiros ELITE', 105, 93);
INSERT INTO "warriors_war" VALUES (1, 1,'Guerreiros do comandante Théos', 15, 10);
INSERT INTO "warriors_war" VALUES (2, 2,'Guerreiros do comandante Rodger', 20, 16);
INSERT INTO "warriors_war" VALUES (3, 3,'Guerreiros do comandante Magno', 25, 21);
INSERT INTO "warriors_war" VALUES (4, 4,'Guerreiros do comandante Liam', 32, 30);
INSERT INTO "warriors_war" VALUES (5, 5,'Guerreiros do comandante Apólo', 40, 35);
INSERT INTO "warriors_war" VALUES (6, 6,'Guerreiros do comandante Dandara', 47, 42);
INSERT INTO "warriors_war" VALUES (7, 7,'Guerreiros do comandante Celina', 60, 53);
INSERT INTO "warriors_war" VALUES (8, 8,'Guerreiros do comandante Ícarus', 71, 66);
INSERT INTO "warriors_war" VALUES (9, 9,'Guerreiros do comandante Orion', 90, 83);
INSERT INTO "warriors_war" VALUES (10, 10,'Guerreiros ELITE', 120, 101);

-- tem que inserir recebendo o mesmo valor do id pra fazer o inner join
-- INSERT INTO "users" VALUES ("dsa-ewq-321dsa", "cara", "cara@cara","123123", "War");
-- INSERT INTO "info_game" (id) VALUES ("dsa-ewq-321dsa");

-- CONSTRAINTS
ALTER TABLE info_game
ADD CONSTRAINT Check_level CHECK ("level">=1 AND "level"<=10);

ALTER TABLE users
ADD CONSTRAINT Check_origin CHECK ("origin" = 'Magic' OR "origin" = 'Researcher' or "origin" = 'War');
