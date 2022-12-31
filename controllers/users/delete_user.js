// Quando testar API em postman comentar a linha do res.redirect('/')
// e autenticar primeiramente a conta na rota de /auth antes deletar, caso contrario não funciona

const knex = require('../../config/conn_knex')

const delete_user = async (req, res) => {

    try {
        const session = req.session
        if(!session.loggedin)
            res.redirect('/delete/error')
        else {

            if (req.session.cookie._expires !== null) {

                    await knex('users')
                                    .where({ user_id: session.userId })
                                    .del()

                    console.log('Deleted user_id: ' + session.userId)

                    res.redirect('/')
            } else {
                res.redirect('/support')
            }
        }
    } catch (err) {
        res.redirect('/expires')
    }

    res.end()
}

module.exports = { delete_user }
