module.exports = function (app) {
    //API (backend)
    require("./api/session")(app);
    require("./api/game")(app);

    // Web Socket
    require("./socket_io")(app);

    // Pages
    require("./private_pages")(app);
};
