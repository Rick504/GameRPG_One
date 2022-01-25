-- INSERT INTO users (u_name, email, password, origin) values ('rick', 'rick@gmaiol.com', '321321321', 'researcher');
-- INSERT INTO users (u_name, email, password, origin) values ('tami', 'tami@gmaiol.com', '321321321', 'magic');
-- INSERT INTO users (u_name, email, password, origin) values ('joao', 'joao@gmaiol.com', '321321321', 'war');

-- SELECT a.*, b.* from users a INNER JOIN warriors_researcher b on a.id_army = b.id

-- UPDATE users set id_army = 3 WHERE id = 3