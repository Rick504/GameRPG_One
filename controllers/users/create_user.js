const knex = require('../../config/conn_knex')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt')

const create_user = async (req, res) => {

        try {
            let userBody = req.body
            let session = req.session
            let db_users = await knex('users')

            // verificando se existe esse email no banco
            if (db_users.length > 0) {
                if (db_users[0].email === userBody.email) {
                    res.redirect('/registration?emailExists=true')
                    return res.end()
                }

                // verificando se existe esse nome no banco
                if (db_users[0].user_name === userBody.user_name) {
                    res.redirect('/registration?nameExists=true')
                    return res.end()
                }
            }

            const hashPassword = await bcrypt.hash(userBody.password, 10)

            const data_user = {
                user_id: uuidv4(),
                user_name: userBody.user_name,
                email: userBody.email,
                password: hashPassword,
                origin: userBody.origin,
            }

            await knex('users').insert(data_user)
            await knex('info_game').insert({level: 1})

            var dbUser = await knex('users').where({ user_name: data_user.user_name }) // ou E-mail
            let user = dbUser[0]

            //Session Express
            session.authorized = true
            session.user = user

            res.redirect('/home')

            console.log('Registered user: ',data_user.user_name)

        } catch (err) {
            res.redirect('/')
        }

        res.end()
    }


module.exports = { create_user }
