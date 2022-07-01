const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
let port = process.env.PORT || 3000;

app.use(cors({
    origin:'*'
}))

app.get(':endpoint([\\/\\w\\.-]*)', (req, res)=>{
    let endpoint = 'https://api.deezer.com' + req.params.endpoint;

    axios.get(endpoint)
    .then(response=>res.json(response.data))
    .catch(error=>res.json(error))
})

app.listen(port)