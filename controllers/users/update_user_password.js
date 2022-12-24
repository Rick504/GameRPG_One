const knex = require('../../config/conn_knex')

const update_user_password = async (req, res) => {

        // TESTE -------------------------------
        let user_id = 2

        let userData = await knex('users').where({ user_id: 2 })
        let db_password = userData[0].password

        let old_password = req.body.old_password
        let new_password = req.body.password
        let password_confirm = req.body.password_confirm

        if (db_password === old_password && new_password === password_confirm) {

            if (req.session.cookie._expires !== null && req.session.cookie.key === "is8-2inD-a83-dhuw-de") {

                await knex('users')
                                .where({ user_id: user_id })
                                .update({ password: new_password })

                console.log('Updated user password!!')
                res.redirect('/updatePasswordSuccess')
            } else {
                res.render("../views/login/loginExpires")
            }

        }  else {
            req.flash('error')
            res.redirect('/updateAccontPassword')
        }
        res.end()
    }

module.exports = { update_user_password }
