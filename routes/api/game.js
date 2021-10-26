const { Pool } = require("pg/lib");

module.exports = function (app) {
    app.get("/purchase_gold", function (req, res) {
        if (workers >= 0 && gold >= 2 && supplies >= 13) {
            //variaveis de atualização
            const less_gold = 2;
            const less_supplies = 13;
            const add_worker = 1;

            const current_worker = parseInt(workers) + parseInt(add_worker);
            const current_gold = parseInt(gold) - parseInt(less_gold);
            const current_supplies =
                parseInt(supplies) - parseInt(less_supplies);

            //Update Mysql
            conn.query(
                "UPDATE users SET workers=" +
                    current_worker +
                    ", gold=" +
                    current_gold +
                    ", supplies =" +
                    current_supplies +
                    "  WHERE id = $1",
                [user_id]
            );

            // variaveis do Banco
            workers = current_worker;
            gold = current_gold;
            supplies = current_supplies;

            //handlebars
            dados_user.workers = current_worker;
            dados_user.gold = current_gold;
            dados_user.supplies = current_supplies;

            res.redirect("/Trabalhadores/" + user_id);
        } else {
            workers = workers;
            gold = gold;
            supplies = supplies;
        }
    });

    app.get("/updateArmy", function (req, res) {
        if (gold >= 50) {
            const addArmy = 1;
            const lessGold = 50;
            const current_gold = parseInt(gold) - parseInt(lessGold);
            const current_army = parseInt(army) + parseInt(addArmy);

            conn.query(
                "UPDATE users SET army = " +
                    current_army +
                    ", gold = " +
                    current_gold +
                    "  WHERE id = $1",
                [user_id]
            );

            //atualizando results do BD
            army = current_army;
            gold = current_gold;

            //atualizando handlebars
            dados_user.army = current_army;
            dados_user.gold = current_gold;

            res.redirect("/Exercito/" + user_id);
        }
    });

    app.get("/updateDiamonds", function (req, res) {
        const addDiamantes = 20;
        const diamantesAtual = parseInt(diamonds) + parseInt(addDiamantes);

        conn.query(
            "UPDATE users SET diamonds = " + diamantesAtual + " WHERE id = $1",
            [user_id]
        );

        diamonds = diamantesAtual;
        dados_user.diamonds = diamantesAtual;

        res.redirect("/Diamantes/" + user_id);
    });

    app.get("/updateWorkers_gold", function (req, res) {
        if (workers > 0) {
            //variaveis de atualização
            const less_worker = 1;
            const add_gold = 1;

            const current_worker = parseInt(workers) - parseInt(less_worker);
            const current_gold =
                parseInt(worker_producing_gold) + parseInt(add_gold);

            //Update Mysql
            conn.query(
                "UPDATE users SET workers = " +
                    current_worker +
                    ", worker_producing_gold = " +
                    current_gold +
                    " WHERE id = $1",
                [user_id]
            );

            // variaveis do Banco
            worker_producing_gold = current_gold;
            workers = current_worker;

            //handlebars
            dados_user.worker_producing_gold = current_gold;
            dados_user.workers = current_worker;

            res.redirect("/Trabalhadores/" + user_id);
        } else {
            const zero = 0;

            conn.query(
                "UPDATE users SET workers = " + zero + " WHERE id = $1",
                [user_id]
            );
        }
    });

    app.get("/updateWorkers_supplies", function (req, res) {
        if (workers > 0) {
            //variaveis de atualização
            const less_worker = 1;
            const add_supplies = 8;

            const current_worker = parseInt(workers) - parseInt(less_worker);
            const current_supplies =
                parseInt(worker_producing_supplies) + parseInt(add_supplies);

            //Update Mysql
            conn.query(
                "UPDATE users SET workers = " +
                    current_worker +
                    ", worker_producing_supplies = " +
                    current_supplies +
                    " WHERE id = $1",
                [user_id]
            );

            // variaveis do Banco
            worker_producing_supplies = current_supplies;
            workers = current_worker;

            //handlebars
            dados_user.worker_producing_supplies = current_supplies;
            dados_user.workers = current_worker;

            res.redirect("/Trabalhadores/" + user_id);
        } else {
            const zero = 0;

            conn.query(
                "UPDATE users SET workers = " + zero + " WHERE id = $1",
                [user_id]
            );
        }
    });

    app.get("/updateWorkers_wood", function (req, res) {
        if (workers > 0) {
            //variaveis de atualização
            const less_worker = 1;
            const add_wood = 5;

            const current_worker = parseInt(workers) - parseInt(less_worker);
            const current_wood =
                parseInt(worker_producing_wood) + parseInt(add_wood);

            //Update Mysql
            conn.query(
                "UPDATE users SET workers = " +
                    current_worker +
                    ", worker_producing_wood = " +
                    current_wood +
                    " WHERE id = $1",
                [user_id]
            );

            // variaveis do Banco
            worker_producing_wood = current_wood;
            workers = current_worker;

            //handlebars
            dados_user.worker_producing_wood = current_wood;
            dados_user.workers = current_worker;

            res.redirect("/Trabalhadores/" + user_id);
        } else {
            const zero = 0;

            conn.query(
                "UPDATE users SET workers = " + zero + " WHERE id = $1",
                [user_id]
            );
        }
    });
};
