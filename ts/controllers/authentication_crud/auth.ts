import knex from '../../config/conn_knex'
import { Request, Response } from 'express';

const auth_user = async (req: Request, res: Response) => {
        
        let { user_name, password } = req.body

        if (user_name && password) {

            var Banco = await knex('users').where({
                user_name: user_name,
                password: password
            })

            if (Banco.length > 0) {

                //Session Express
                // req.session.loggedin: = true
                // req.session.username: = user_name
                console.log(req.session)

                user_id: Number = Banco[0].user_id
 
                //redirecionar para Logged com id
                res.redirect('http://localhost:3000/logged/home')

                } else {
                    res.send(`  <script>

                                    alert('Nome e / ou password incorretos!'); 
                                    history.back();
                                    
                                </script>`)
                }

                res.end()
                
    }
}

export default auth_user