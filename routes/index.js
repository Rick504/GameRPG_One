module.exports = function ( app ) {
    require('./io')(app)
    require('./login')(app)
    require('./logout')(app)
}