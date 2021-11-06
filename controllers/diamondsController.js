const diamonds_update  = (req,res, next) => {
    
    const addDiamantes = 20
    const diamantesAtual = parseInt(diamonds)  +  parseInt(addDiamantes)

    conn.query("UPDATE users SET diamonds = " + diamantesAtual + " WHERE id = $1",[user_id])

    diamonds = diamantesAtual
    dados_user.diamonds = diamantesAtual

    res.redirect('/Diamantes/'+ user_id)
}

module.exports = {diamonds_update}