module.exports = function ( app ) {

    //TESTES
    require('../tests/psql')(app)

    //===================================================   APIs   =========================================================//

    //APIs main
    require('./APIs main/auth')(app)
    require('./APIs main/socke_io')(app)

    //APIs - Page Diamonds
    require('./PagesJS/Page_Diamonds/APIs_Diamonds/updateDiamonds')(app)

    //APIs - Page Army
    require('./PagesJS/Page_Army/APIs_Army/updateArmy')(app)

    //APIs - Page Workers
    require('./PagesJS/Page_Workers/APIs_updateWorkers/purchase_gold')(app)
    require('./PagesJS/Page_Workers/APIs_updateWorkers/updateWorkers_gold')(app)
    require('./PagesJS/Page_Workers/APIs_updateWorkers/updateWorkers_supplies')(app)
    require('./PagesJS/Page_Workers/APIs_updateWorkers/updateWorkers_wood')(app)

    //===================================================   HTML   =========================================================//
    
    require('./APIs main/login')(app)
    require('./APIs main/register')(app)
    require('./APIs main/registerperformed')(app)


    //===================================================  Pages  ==========================================================//

    //Menu principal
    require('./PagesJS/Page_Diamonds/Diamonds')(app)
    require('./PagesJS/Page_Logged/Logged')(app)
    require('./PagesJS/Page_Manual/Manual')(app)
    require('./PagesJS/Page_Profile/Profile')(app)

    //Ações
    require('./PagesJS/Page_Workers/Workers')(app)
    require('./PagesJS/Page_Business/Business')(app)
    require('./PagesJS/Page_Technology/Technology')(app)
    require('./PagesJS/Page_Army/Army')(app)
    require('./PagesJS/Page_Messages/Messages')(app)

    //Informações
    require('./PagesJS/Page_Clan/Clan')(app)
    require('./PagesJS/Page_Ranking/Ranking')(app)
    require('./PagesJS/Page_Historic/Historic')(app)
    require('./PagesJS/Page_Support/Support')(app)

}

