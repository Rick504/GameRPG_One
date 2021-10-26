const path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "../../html/login.html"));
        // req.session.destroy()
    });

    app.get("/register", function (req, res) {
        res.sendFile(path.join(__dirname + "../../html/register.html"));
    });
};
