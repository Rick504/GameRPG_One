const knex = require('../../config/conn_knex')
const bcrypt = require('bcrypt')

const update_user_password = async (req, res) => {

        try {
            const session = req.session
            const authorized = session.authorized
            const notExpiredCookie = session.cookie._expires

            if(!session.authorized)
                    res.redirect('/update/password/error')
                else {

                let userBody = req.body
                // console.log(session.user)

                let userData = await knex('users').where({ user_id: session.user.user_id })
                let db_password = userData[0].password

                let isValidPassword = bcrypt.compareSync(userBody.old_password, db_password)

                let new_password = userBody.password
                let password_confirm = userBody.password_confirm

                    if (isValidPassword && new_password === password_confirm) {

                        const hashPassword = await bcrypt.hash(new_password, 10)

                        if (authorized && notExpiredCookie) {

                            await knex('users')
                                            .where({ user_id: session.user.user_id })
                                            .update({ password: hashPassword })

                            res.redirect('/update/password/success')

                        } else {
                            res.render("../views/login/expires")
                        }

                    }  else {
                        res.redirect('/update/password/?fail=true')
                    }
                }

        } catch (err) {
            res.redirect('/update/password/error')
        }

        res.end()
    }

module.exports = { update_user_password }
