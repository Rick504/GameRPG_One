module.exports = function ( app ) {
    require('./io')(app)
    require('./Logged')(app)
    require('./Profile')(app)
}