module.exports = function ( app ) {
    //api
    require('./API/auth')(app)
    require('./API/socke_io')(app)
    require('./API/updateDiamonds')(app)
    require('./API/updateArmy')(app)
    require('./API/updateWorkers')(app)

    //Menu principal
    require('./PagesJS/Escolhendo_Origem')(app)
    require('./PagesJS/Diamantes')(app)
    require('./PagesJS/Logged')(app)
    require('./PagesJS/Manual')(app)
    require('./PagesJS/Profile')(app)

    //Ações
    require('./PagesJS/Trabalhadores')(app)
    require('./PagesJS/Comercio')(app)
    require('./PagesJS/Tecnologia')(app)
    require('./PagesJS/Exercito')(app)
    require('./PagesJS/Menssagens')(app)

    //Informações
    require('./PagesJS/Cla')(app)
    require('./PagesJS/Ranking')(app)
    require('./PagesJS/Historico')(app)
    require('./PagesJS/Suporte')(app)
}