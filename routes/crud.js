const express = require("express")
const urlencodeParser = express.urlencoded({ extended: false })
const router = express.Router()

const create_user = require("../controllers/authentication_crud/create_user")
const read_user = require("../controllers/authentication_crud/read_user")
const update_user = require("../controllers/authentication_crud/update_user")
const delete_user = require("../controllers/authentication_crud/delete_user")

router

    .post("/create_user", urlencodeParser, create_user.create_user)
    .get("/read_user", read_user.read_user)
    .put("/update_user/:id", update_user.update_user)
    .delete("/delete_user/:id", urlencodeParser, delete_user.delete_user)


module.exports = router