'use strict'

module.exports = (sequelize, Sequelize) => {
    const factura = sequelize.define('factura', {
        nit: {
            type: Sequelize.INTEGER
        },
        razonSocial: {
            type: Sequelize.STRING(255)
        },
    });
    return factura;
}
