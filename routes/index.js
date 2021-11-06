module.exports = function ( app ) {

    //===================================================   PagesJS   =========================================================//

    require('./routes')(app)

    //===================================================   APIs   =========================================================//

    require('../controllers/APIs main/auth')(app)
    require('../controllers/APIs main/socke_io')(app)
    require('../controllers/APIs main/registerperformed')(app)

}

