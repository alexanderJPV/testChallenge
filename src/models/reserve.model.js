'use strict'

module.exports = (sequelize, Sequelize) => {
    const reserve = sequelize.define('reserve', {
        status: {
            type: Sequelize.ENUM('PENDIENTE', 'PAGADO', 'ELIMINADO')
        },
        startDate: {
            type: Sequelize.DATEONLY()
        },
        endDate: {
            type: Sequelize.DATEONLY()
        },
    });
    return reserve;
}
