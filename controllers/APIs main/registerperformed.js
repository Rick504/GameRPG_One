const express = require("express");
const path = require("path");

module.exports = function ( app ) {
    const urlencodeParser = express.urlencoded({ extended: false });

    //Cadastro Realizado / HTML - api
    app.post("/registrationPerformed", urlencodeParser, function (req, res) {
        const { u_name, email, password, origin } = req.body;

        conn.query(
            `INSERT INTO users(u_name, email, password, origin) VALUES ($1, $2, $3, $4) RETURNING id;`,
            [u_name, email, password, origin]
        ),
        (error, results) => {
            if (error) {
                throw error;
            }
        };

        res.sendFile(path.join(__dirname + "../../../views/html/registrationPerformed.html"));
    });
}