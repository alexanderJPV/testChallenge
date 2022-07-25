'use strict'
const db = require('../../DBConfig')
const control = require('../helpers/pagination');
const Payment = db.payment
const factura = db.factura
const paymentCtrl = {}

const facturaAttributes = [ 'id' ];

paymentCtrl.findAll = async (req,res) => {
    try {
        const response = await Payment.findAndCountAll(control.pagination(req,'', factura, facturaAttributes ,null))
        res.status(200).json(control.JSONResponse(req, response))
    } catch (error) {
        res.status(500).json(
            {
                msg: "error",
                details: error
            }
        )
    }
}
paymentCtrl.create = async (req, res) => {
    const datas = Object.assign({}, req.body)
    console.log(datas)
    try {
        const response = await Payment.create(datas)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(
            {
                msg: 'error create room',
                details: error
            }
        )
    }
}
paymentCtrl.update = async (req, res) => {
    const datas = await Object.assign({}, req.body);
    try {
        const response = await Payment.update(datas, { where: { id: datas.id }, returning: true, plain: true });
    	  res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: 'error update payment', details: error });
    }
}

paymentCtrl.findById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await Payment.findOne({ where: { id: id }});
        res.status(200).json(response);
    } catch (error) {
        res.status(300).json({ msg: 'error to find payment', details: error });
    }
}

paymentCtrl.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await Payment.destroy({ where: { id: id } })
        res.status(200).json({ msg: 'deleted successfully -> payment id = ', id });
    } catch (error) {
        res.status(300).json({ msg: 'error delete payment', details: error });
    }
}
module.exports = paymentCtrl