import { Router } from 'express';
const routes = Router();

import users from "../controllers/testes/users";

routes.get('/users', users)

export default routes;