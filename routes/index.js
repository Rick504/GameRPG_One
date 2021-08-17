module.exports = function ( app ) {
    //api
    require('./socke_io')(app)

    //Menu principal
    require('./Diamantes')(app)
    require('./Logged')(app)
    require('./Manual')(app)
    require('./Profile')(app)

    //Ações
    require('./Trabalhadores')(app)
    require('./Comercio')(app)
    require('./Tecnologia')(app)
    require('./Exercito')(app)
    require('./Menssagens')(app)

    //Informações
    require('./Cla')(app)
    require('./Ranking')(app)
    require('./Historico')(app)
    require('./Suporte')(app)
}