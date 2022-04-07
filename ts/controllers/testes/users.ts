import knex from '../../config/conn_knex';
import { Request, Response } from 'express';

const users = async (req: Request, res: Response) => {

    const rows: JSON = await knex('users')
    res.send(rows)
}

export default users