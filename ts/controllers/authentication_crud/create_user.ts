import knex from '../../config/conn_knex';
import { Request, Response } from 'express';

const create_user = async (req: Request, res: Response) => {

        const data_user = {
            user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password,
            origin: req.body.origin,
        }

        await knex('users').insert(data_user)
        await knex('info_game').insert({level: 1})

        res.redirect('http://localhost:3000/registration_performed')

        console.log('Registered user: ')
        console.log(data_user.user_name)
    }

export default create_user
