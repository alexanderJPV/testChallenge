const express = require('express')
const app = express()
const db = require('./DBConfig');
// set port
app.set('port',3000)
// support json format
app.use(express.json())
// Routes
app.use(require('./src/routes/client.router'))
app.use(require('./src/routes/room.router'))
app.use(require('./src/routes/reserve.router'))
app.use(require('./src/routes/payment.router'))
app.use(require('./src/routes/factura.router'))
// server live
app.listen(app.get('port'), () => {
    console.log("********************************")
    console.log(`Server Backen work on port ${app.get('port')}`)
    db.sequelize.sync().then(() => {
        console.log("drop and resync with { force: true }");
    });
    console.log("********************************")
})