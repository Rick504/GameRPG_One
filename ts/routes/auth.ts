import { Router } from "express"
const routes = Router();

import auth from "../controllers/authentication_crud/auth"
import logout from "../controllers/authentication_crud/logout"

routes

    .get("/logout", logout)
    .post("/auth", auth)

export default routes