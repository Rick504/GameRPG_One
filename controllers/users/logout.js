const logout = async (req, res) => {

    const session = req.session
    if(session) {
        session.destroy()
    }

    res.redirect('/')
    // console.log("Usuário deslogado!!")

}

module.exports = { logout }
