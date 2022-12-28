const knex = require('../../config/conn_knex')

const update_user_email = async (req, res) => {

        let session = req.session
        if(!session.loggedin)
            res.redirect('/update/email/error')
        else {

            let userBody = req.body
            // let isValidEmail;
            // let email_users = await knex.select('email').from('users')

            // // ARRUMAR ESSA FUNÇÃAAAAO **********************************
            // await email_users.forEach(element => {
            //     element.email !== userBody.email? isValidEmail = true : isValidEmail = false
            // });

            // console.log('passou o loop',isValidEmail)

            let email_confirm = userBody.email_confirm
            let email = userBody.email

            // console.log('isValidEmail && email === email_confirm' , isValidEmail && email === email_confirm? true: false)
            // console.log('isValidEmail' , isValidEmail? true: false)
            // console.log('email === email_confirm' , email === email_confirm? true: false)

            if (email === email_confirm) {
                if (req.session.cookie._expires !== null) {

                    try {
                        await knex('users')
                                        .where({ user_id: session.userId })
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

        res.end()
    }


module.exports = { update_user_email }
