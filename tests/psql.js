module.exports = function ( app ) {

    app.get('/psql', async(req, res) => {
        const { rows } = await conn.query('select * from users')
        res.send(rows)
      })
}
