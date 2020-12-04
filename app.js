const cors = require('cors')
const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Rotas
const index = require('./src/routes/index')

app.use('/', index)

app.listen(port, () => {
    console.log('Server up! Listening on http://localhost:3000')
})