module.exports = ( app ) => {

    var http = require('http').Server(app)
    var io = require('socket.io')(http)
    const PORT = 3000

    // AUMENTA RECURSOS DO JOGADOR POR TURNO AO DESCOMENTAR -------------------------------------------//

    // var prime = null
    // io.on('connection', (socket) => {

    //     setInterval(async () => {

    //         const currint_gold = parseInt(gold)  +  parseInt(worker_producing_gold)
    //         const currint_supplies = parseInt(supplies)  +  parseInt(worker_producing_supplies)
    //         const currint_wood = parseInt(wood)  +  parseInt(worker_producing_wood)


    //         await conn.query("UPDATE users SET gold = " + currint_gold +", supplies = "+ currint_supplies + ", wood = " + currint_wood + "  WHERE id = $1",[user_id])

    //         //atualizando results do BD
    //         gold = currint_gold
    //         supplies = currint_supplies
    //         wood = currint_wood

    //         //atualizando handlebars
    //         dados_user.gold = currint_gold
    //         dados_user.supplies = currint_supplies
    //         dados_user.wood = currint_wood

    //     }, 10000)


    //     setInterval(() => {
    //         prime+=2
    //     }, 5000)
    //     socket.emit('cart', prime)
    // })

    //------------------------------------------------------------------------------------------------//


    //Start Server
    http.listen(PORT, function(){console.log('Socket.io on port localhost:' + PORT)})

  }