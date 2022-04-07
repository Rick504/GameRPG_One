import knex from '../../config/conn_knex';
import { Request, Response } from 'express';

const update_user = async (req: Request, res: Response) => {

        const update_data_user = {
            user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password,
        }

        const user_id = { 
            user_id: req.params 
        }

        // if (req.session.cookie._expires !== null && req.session.cookie.key === "is8-2inD-a83-dhuw-de") {
            
        //     try {

                await knex('users')
                                .where({ user_id: user_id })
                                .update(update_data_user)

                console.log('Updated user data: ')
                console.log(update_data_user)
                // res.redirect('http://localhost:3000/update_data_user')

                res.status(200).json({ messege: 'User update successfully !!'})

        //     } catch (error) {

        //         res.status(404).json({ error: error })
        //     }
        // }

        res.end()
    }

export default update_user