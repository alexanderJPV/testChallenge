'use strict'

module.exports = (sequelize, Sequelize) => {
    const payment = sequelize.define('payment', {
        amount: {
            type: Sequelize.DOUBLE
        },
        methodPay: {
            type: Sequelize.STRING(255)
        },
    });
    return payment;
}
