const knex = require('../../config/conn_knex')

const delete_user = async (req, res) => {

    try {
        const session = req.session
        const authorized = session.authorized
        const notExpiredCookie = session.cookie._expires

        if(!session.authorized)
            res.redirect('/delete/error')
        else {

            if (authorized && notExpiredCookie) {

                    await knex('users')
                                    .where({ user_id: session.user.user_id })
                                    .del()

                    console.log('Deleted user_id: ' + session.user.user_id)

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
