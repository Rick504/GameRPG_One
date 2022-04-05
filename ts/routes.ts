import { Router } from 'express';

const routes = Router();

routes.get('/users', () => {
    return 'teste'
});

export default routes;