'use strict'

module.exports = (sequelize, Sequelize) => {
    const client = sequelize.define('client', {
        name: {
            type: Sequelize.STRING(255)
        },
    });
    return client;
}
