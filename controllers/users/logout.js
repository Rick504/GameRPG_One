const logout = async (req, res) => {

    req.session.destroy()

    res.redirect('/')
    // console.log("Usuário deslogado!!")

}

module.exports = { logout }
