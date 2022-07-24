const express = require('express')
const app = express()
const db = require('./DBConfig');
// set port
app.set('port',3000)
// support json format
app.use(express.json())
// Routes
app.use(require('./src/routes/client.router'))
// server live
app.listen(app.get('port'), () => {
    console.log("********************************")
    console.log(`Server Backen work on port ${app.get('port')}`)
    console.log("********************************")
})