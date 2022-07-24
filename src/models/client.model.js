'use strict'

module.exports = (sequelize, Sequelize) => {
    const client = sequelize.define('client', {
        name: {
            type: Sequelize.STRING(255)
        },
        lasName: {
            type: Sequelize.STRING(255)
        },
        age: {
            type: Sequelize.INTEGER
        },
        ci: {
            type: Sequelize.INTEGER,
            unique: {
                args: true,
                msg: 'CI already exists'
            },
        },
        phone: {
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING,
            unique: {
                args: true,
                msg: 'Email already exists'
            },
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Emails-id required'
                },
                isEmail: {
                    args: true,
                    msg: 'Valid email-id required'
                }
            }
        },
        addres: {
            type: Sequelize.STRING(255)
        },
        nit: {
            type: Sequelize.STRING(255)
        },
        nationality: {
            type: Sequelize.STRING(255)
        },
    });
    return client;
}
