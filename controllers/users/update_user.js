const knex = require('../../config/conn_knex')

const update_user = async (req, res) => {

        const update_data_user = {
            email: req.body.email,
            password: req.body.password,
            password_2: req.body.password_2
        }

        if (req.session.cookie._expires !== null && req.session.cookie.key === "is8-2inD-a83-dhuw-de") {

            try {

                await knex('users')
                                .where({ user_id: user_id })
                                .update(update_data_user)

                console.log('Updated user data: ')
                console.log(update_data_user)
                res.redirect('/home')

                res.status(200).json({ messege: 'User update successfully !!'})

            } catch (error) {

                res.status(404).json({ error: error })
            }
        }

        res.end()
    }


module.exports = { update_user }
