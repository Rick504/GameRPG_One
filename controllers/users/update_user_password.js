const knex = require('../../config/conn_knex')
const bcrypt = require('bcrypt')

const update_user_password = async (req, res) => {

        let session = req.session
        let userBody = req.body
        // console.log(session)

        let userData = await knex('users').where({ user_id: session.userId })
        let db_password = userData[0].password

        let old_password = userBody.old_password
        let new_password = userBody.password
        let password_confirm = userBody.password_confirm

        if(!session.loggedin)
            res.render("../views/account/update/password/error")
        else {
            if (db_password === old_password && new_password === password_confirm) {

                if (session.cookie._expires !== null) {

                    await knex('users')
                                    .where({ user_id: session.userId })
                                    .update({ password: new_password })

                    res.redirect('/update/password/success')

                } else {
                    res.render("../views/login/expires")
                }

            }  else {
                res.redirect('/update/password/?fail=true')
            }
        }

        res.end()
    }

module.exports = { update_user_password }