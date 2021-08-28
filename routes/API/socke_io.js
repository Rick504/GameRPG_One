module.exports = function ( app ) {

    var http = require('http').Server(app)
    var io = require('socket.io')(http)

    // /io - rota - api -------------------------
    app.get('/socke_io', function (req, res) {
        res.send('Hello socket !!')
    })
    
    var prime = null
    io.on('connection', function(socket){

        setInterval(() => {
            prime+=2
        }, 1000)
        socket.emit('cart', prime)
    })

    //Start Server -------------------------------
    http.listen(3000, function(){
        console.log('Game on port localhost:3000')
    })
}