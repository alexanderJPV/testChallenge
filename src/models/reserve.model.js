'use strict'

module.exports = (sequelize, Sequelize) => {
    const reserve = sequelize.define('reserve', {
        status: {
            type: Sequelize.ENUM('PENDIENTE', 'PAGADO', 'ELIMINADO')
        },
        dateIni: {
            type: Sequelize.DATEONLY()
        },
        dateEnd: {
            type: Sequelize.DATEONLY()
        },
    });
    return reserve;
}
