module.exports = function (app) {
    app.get("/Cla/:id", function (req, res) {
        if (req.session.loggedin) {
            res.render("Cla", { data: dados_user });
        }
    });

    app.get("/Comercio/:id", function (req, res) {
        if (req.session.loggedin) {
            res.render("Comercio", { data: dados_user });
        }
    });

    app.get("/Diamantes/:id", function (req, res) {
        if (req.session.loggedin) {
            res.render("Diamantes", { data: dados_user });
        }
    });

    app.get("/Exercito/:id", function (req, res) {
        if (req.session.loggedin) {
            res.render("Exercito", { data: dados_user });
        }
    });

    app.get("/Historico/:id", function (req, res) {
        if (req.session.loggedin) {
            res.render("Historico", { data: dados_user });
        }
    });

    app.get("/Logged/:id", function (req, res) {
        if (req.session.loggedin) {
            res.render("Logged", { data: dados_user });
        } else {
            res.send(
                "<script>alert('Por favor, insira o nome e a senha!'); history.back()</script>"
            );
        }
    });

    app.get("/Manual/:id", function (req, res) {
        if (req.session.loggedin) {
            res.render("Manual", { data: dados_user });
        }
    });

    app.get("/Menssagens/:id", function (req, res) {
        if (req.session.loggedin) {
            res.render("Menssagens", { data: dados_user });
        }
    });

    app.get("/Profile/:id", function (req, res) {
        if (req.session.loggedin) {
            res.render("Profile", { data: dados_user });
        }
    });

    app.get("/Ranking/:id", function (req, res) {
        if (req.session.loggedin) {
            res.render("Ranking", { data: dados_user });
        }
    });

    app.get("/Suporte/:id", function (req, res) {
        if (req.session.loggedin) {
            res.render("Suporte", { data: dados_user });
        }
    });

    app.get("/Tecnologia/:id", function (req, res) {
        if (req.session.loggedin) {
            res.render("Tecnologia", { layout: false, data: dados_user });
        }
    });

    app.get("/Trabalhadores/:id", function (req, res) {
        if (req.session.loggedin) {
            res.render("Trabalhadores", { data: dados_user });
        }
    });
};
