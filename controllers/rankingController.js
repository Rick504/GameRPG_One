model = require('../models/ranking')

const allPlayers = async (req, res) => {

    await model.rows.sort((a, b) => {
        return b.gold - a.gold
     })

     await res.send(model.rows)
}

module.exports = { allPlayers }