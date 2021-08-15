module.exports = function ( app ) {

    var http = require('http').Server(app)
    var io = require('socket.io')(http)

    // /io - rota - api -------------------------
    app.get('/io', function (req, res) {
        res.send('Hello socket !!')
    })
    
    var prime = null
    io.on('connection', function(socket){

        setInterval(() => {
            prime+=2
        }, 1000)
        socket.emit('cart', prime)

        //somante para teste
        console.log('socket Logado: ' + socket.id)
    })

    //Start Server -------------------------------
    http.listen(3000, function(){
        console.log('Player on port *:3000')
    })
}