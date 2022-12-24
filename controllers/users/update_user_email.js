const knex = require('../../config/conn_knex')

const update_user_email = async (req, res) => {

        // email_confirm: req.body.email_confirm,
        const dataUser = {
            email: req.body.email
        }

        if (req.session.cookie._expires !== null && req.session.cookie.key === "is8-2inD-a83-dhuw-de") {

            try {

                await knex('users')
                                .where({ user_name: user_name })
                                .update(dataUser)

                console.log('Updated user data: ')
                console.log(dataUser)
                res.redirect('/home')

                res.status(200).json({ messege: 'User update successfully !!'})

            } catch (error) {

                res.status(404).json({ error: error })
            }
        }

        res.end()
    }


module.exports = { update_user_email }
