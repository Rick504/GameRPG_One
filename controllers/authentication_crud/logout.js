const logout = async (req, res) => {
        
    req.session.destroy()
        
    res.redirect('http://localhost:3000/')
            
}

module.exports = { logout }