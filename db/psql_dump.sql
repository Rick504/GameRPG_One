-- Creation of product table
CREATE TABLE IF NOT EXISTS users (
    id serial NOT NULL,
    u_name varchar(45) NOT NULL,
    email varchar(45) NOT NULL,
    password varchar(150) NOT NULL,
    origin varchar(20) NOT NULL,
    gold varchar(10) DEFAULT 1 NOT NULL,
    wood varchar(10) DEFAULT 5 NOT NULL,
    supplies varchar(10) DEFAULT 5 NOT NULL,
    army varchar(10) DEFAULT 0 NOT NULL,
    workers varchar(10) DEFAULT 0 NOT NULL,
    diamonds varchar(10) DEFAULT 100 NOT NULL,
    worker_producing_gold varchar(1) DEFAULT 1 NOT NULL,
    worker_producing_supplies varchar(1) DEFAULT 1 NOT NULL,
    worker_producing_wood varchar(1) DEFAULT 1 NOT NULL,
    level varchar(2) DEFAULT 1 NOT NULL,
    cla varchar(30),
    PRIMARY KEY (id)
);