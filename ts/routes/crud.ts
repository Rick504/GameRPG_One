import express, { Router } from "express"
const urlencodeParser = express.urlencoded({ extended: false })
const routes = Router();

import create_user from "../controllers/authentication_crud/create_user"
import read_user from "../controllers/authentication_crud/read_user"
import update_user from "../controllers/authentication_crud/update_user"
import delete_user from "../controllers/authentication_crud/delete_user"

routes

    .post("/create_user", urlencodeParser, create_user)
    .get("/read_user", read_user)
    .put("/update_user/:id", update_user)
    .delete("/delete_user/:id", urlencodeParser, delete_user)


export default routes