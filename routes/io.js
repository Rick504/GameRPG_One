module.exports = function ( app ) {
    var http = require('http').Server(app)
    var io = require('socket.io')(http)

    app.get('/io', function (req, res) {
        res.send('Hello socket !!')
    })

    var prime = null

    io.on('connection', function(socket){

        setInterval(() => {
            prime+=2
        }, 1000)
        socket.emit('cart', prime)

        console.log(socket.id)
    })

    http.listen(3000, function(){
        console.log('Ws on port *:3000')
    })
}