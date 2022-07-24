'use strict'
const handSequelize = require('sequelize')

// values postgres databases in set env variable
const env = {
    database: 'movie',
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


sequelize.authenticate().then(() => {
    console.log("Success conect Data Bases postgres!!!!");
  }).catch((err) => {
    console.log(err);
});

const db = {}
module.exports = db;