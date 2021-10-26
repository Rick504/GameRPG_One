const path = require("path");

module.exports = function ( app ) {

    //Cadastrar / HTML - rota
    app.get("/register", function (req, res) {
        res.sendFile(path.join(__dirname + "../../../html/register.html"));
    });
}