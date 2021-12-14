const axios = require('axios')

axios.get('http://localhost:3000/ranking_users').then(data => {
    console.log(data.data)
})

