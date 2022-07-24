'use strict'

module.exports = (sequelize, Sequelize) => {
    const reserve = sequelize.define('reserve', {
        status: {
            type: Sequealize.ENUM('PENDIENTE', 'PAGADO', 'ELIMINADO')
        },
        dateIni: {
            type: Sequealize.DATEONLY()
        },
        dateEnd: {
            type: Sequealize.DATEONLY()
        },
    });
    return reserve;
}
