const logout = async (req, res) => {

    try {
        const session = req.session
        if(session) {
            session.destroy()
        }

        res.redirect('/')
        // console.log("Usuário deslogado!!")
    } catch (err) {
        res.redirect('/expires')
    }


}

module.exports = { logout }
