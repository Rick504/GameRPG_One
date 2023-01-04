-- ("level" BETWEEN 1 ADD 10) aceita somente numeros entre 1 e 10
-- serial - gerado automaticamente
-- Primary Key (chave unica que não pode se repetir)
-- GENERATED ALWAYS instrui o PostgreSQL a sempre gerar um valor para a coluna de identidade. Se você tentar inserir (ou atualizar) valores na GENERATED ALWAYS AS IDENTITYcoluna, o PostgreSQL emitirá um erro.
-- ON DELETE CASCADE é para especificar se você deseja que as linhas sejam excluídas em uma tabela filho quando as linhas correspondentes forem excluídas na tabela pai. Se você não especificar exclusões em cascata, o comportamento padrão do servidor de banco de dados impedirá que você exclua dados em uma tabela se outras tabelas fizerem referência a eles.

-- tem que inserir recebendo o mesmo valor do id pra fazer o inner join
-- INSERT INTO "users" VALUES ('dsa-ewq-3a', 'cara', 'cara@cara','123123', 'War');
-- INSERT INTO "info_game"(id) VALUES ('dsa-ewq-3a');
-- INSERT INTO "preparing_workers"(id) VALUES ('dsa-ewq-3a');


select * from users
inner join info_game on info_game.id = users.user_id
inner join preparing_workers on preparing_workers.id = users.user_id
