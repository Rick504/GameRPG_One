// Quando testar API em postman comentar a linha do res.redirect('/') 
// e autenticar primeiramente a conta na rota de /auth antes deletar, caso contrario não funciona

const knex = require('../../config/conn_knex')

const delete_user = async (req, res) => {
    
    if (req.session.loggedin) {
        
        try {
            await knex('users').where({ user_id: user_id }).del()

            console.log('Deleted user_id: ' + user_id)
            
            res.redirect('/')

            res.status(200).json({ messege: 'User deleted successfully !!'})
            
        } catch (error) {

            res.status(404).json({ error: error })
        }
    }

    res.end()
}

module.exports = { delete_user }
