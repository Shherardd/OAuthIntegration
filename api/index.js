const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const { config } = require('./config')

const app = express()

app.use(bodyParser.json())

app.post("/api/auth/token", function(req, res){
    const { email, username, name} = req.body
    const token = jwt.sign({ sub: username, email, name }, config.authJwtSecret)
    console.log(req.body)
    res.json({ access_token: token})
})

const port = 5000
const server = app.listen(port, function() {
    console.log(`Listening in http://localhost:${server.address().port}`)
})