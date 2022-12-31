const knex = require('../../config/conn_knex')

const update_user_email = async (req, res) => {

        try {
            const session = req.session
            const authorized = session.authorized
            const notExpiredCookie = session.cookie._expires

            if(!session.authorized)
                res.redirect('/update/email/error')
            else {

                let userBody = req.body

                let email_confirm = userBody.email_confirm
                let email = userBody.email

                if (email === email_confirm) {
                    if (authorized && notExpiredCookie) {

                        try {
                            await knex('users')
                                            .where({ user_id: session.user.user_id })
                                            .update({ email: email })

                            res.redirect('/update/email/success')
                        } catch (err) {
                            res.redirect('/update/email/?fail=true')
                        }

                    }
                } else {
                    res.redirect('/update/email/?fail=true')
                }
            }
        } catch (err) {
            res.redirect('/update/email/error')
        }

    res.end()
}


module.exports = { update_user_email }
