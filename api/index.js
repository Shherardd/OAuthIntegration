const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const { config } = require('./config')

const app = express()
const corsOptions = { origin: "http://localhost:5000"}

app.use(bodyParser.json())
app.use(cors(/* There is where corsOptions belongs */))

app.post("/api/auth/token", function(req, res){
    const { email, username, name} = req.body
    const token = jwt.sign({ sub: username, email, name }, config.authJwtSecret)
    console.log(req.body)
    res.json({ access_token: token})
})

const port = 5000
const server = app.listen(port, function() {
    console.log(`Listening in http://localhost:${server.address().port}`)
    console.log(`CORS-enabled sweb server listening on port ${port}`)
})