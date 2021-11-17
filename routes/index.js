module.exports = ( app ) => {

    //rotas
    require('./routes')(app)

    //socket
    require('../controllers/APIs main/socke_io')(app)
    
}

