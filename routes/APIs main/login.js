const path = require("path");

module.exports = function ( app ) {

    //Login - / HTML - rota
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + '../../../html/login.html'));
        req.session.destroy()
    });
}