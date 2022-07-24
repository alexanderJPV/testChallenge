'use strict'

module.exports = (sequelize, Sequelize) => {
    const room = sequelize.define('room', {
        codigo: {
            type: Sequelize.STRING(255)
        },
        nroBeds: {
            type: Sequelize.INTEGER
        },
        price: {
            type: Sequelize.DOUBLE
        },
        status: {
            type: Sequelize.STRING(255),
        }
    });
    return room;
}
