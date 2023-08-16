import axios from "axios"
import express from "express"
import cors from "cors"

const app = express()

let port = process.env.PORT || 3000;

app.use(cors({
    origin:'*'
}))

app.get(':endpoint([\\/\\w\\.-]*)', (req, res)=>{
    let endpoint = 'https://api.deezer.com' + req.params.endpoint;

    let params = {}

    for(const [field, value] of Object.entries(req.query)){
        params[field]=value
    }

    axios.get(endpoint,{
        params:params
    })
    .then(response=>res.json(response.data))
    .catch(error=>res.json(error))
})

app.listen(port)