const knex = require('../../config/conn_knex')

const update_user_email = async (req, res) => {

        let session = req.session
        if(!session.loggedin)
            res.redirect('/update/email/error')
        else {

            let userBody = req.body
            // console.log(session)

            let email_confirm = userBody.email_confirm
            let email = userBody.email

            if (email === email_confirm) {
                if (req.session.cookie._expires !== null) {
                        await knex('users')
                                        .where({ user_id: session.userId })
                                        .update({ email: email })

                        res.redirect('/update/email/success')
                }
            } else {
                res.redirect('/update/email/?fail=true')
            }
        }

        res.end()
    }


module.exports = { update_user_email }
