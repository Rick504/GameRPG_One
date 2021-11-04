module.exports = function ( app ) {

    //===================================================   PagesJS   =========================================================//

    require('./routes')(app)

    //===================================================   APIs   =========================================================//

    //Controllers
    require('../controllers/APIs main/auth')(app)

    //Models


    require('../controllers/APIs main/socke_io')(app)
    require('../controllers/APIs main/registerperformed')(app)

    //APIs - Page Diamonds
    require('../controllers/API Pages/APIs_Diamonds/updateDiamonds')(app)

    //APIs - Page Army
    require('../controllers/API Pages/APIs_Army/updateArmy')(app)

    //APIs - Page Workers
    require('../controllers/API Pages/APIs_Workers/purchase_gold')(app)
    require('../controllers/API Pages/APIs_Workers/updateWorkers_gold')(app)
    require('../controllers/API Pages/APIs_Workers/updateWorkers_supplies')(app)
    require('../controllers/API Pages/APIs_Workers/updateWorkers_wood')(app)

}

