// Quando testar API em postman comentar a linha do res.redirect('/') 
// e autenticar primeiramente a conta na rota de /auth antes deletar, caso contrario não funciona

import knex from '../../config/conn_knex';
import { Request, Response } from 'express';

const delete_user = async (req: Request, res: Response) => {
    
    // if (req.session.cookie._expires !== null && req.session.cookie.key === "is8-2inD-a83-dhuw-de") {
        
    //     try {

            const user_id = { 
                user_id: req.params 
            }
    
            await knex('users').where({ user_id: user_id }).del()

            console.log('Deleted user_id: ' + user_id)
            
            res.redirect('/')

            res.status(200).json({ messege: 'User deleted successfully !!'})
            
        // } catch (error) {

        //     res.status(404).json({ error: error })
        // }
    //}

    res.end()
}

export default delete_user
