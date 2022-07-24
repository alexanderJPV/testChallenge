'use strict'
const handSequelize = require('sequelize')

// values postgres databases in set env variable
const env = {
    database: 'hotel',
    username: 'postgres',
    password: 123,
    host: 'localhost',
}

const sequelize = new handSequelize(env.database, env.username, env.password, {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    // dialectOptions: {
    //     connectTimeout: 60000
    // },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// authentication postgres DB
sequelize.authenticate().then(() => {
    console.log("Success conect Data Bases postgres!!!!")
  }).catch((err) => {
    console.log(err)
});

// MODEL to BD
const db = {}
db.handSequelize = handSequelize
db.sequelize = sequelize

// objets to tables
db.user = require('./src/models/client.model')(sequelize, handSequelize)
db.room = require('./src/models/room.model')(sequelize, handSequelize)
db.reserve = require('./src/models/reserve.model')(sequelize, handSequelize)
db.payment = require('./src/models/payment.model')(sequelize, handSequelize)
db.factura = require('./src/models/factura.model')(sequelize, handSequelize)
// realtionship

module.exports = db;