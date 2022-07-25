'use strict'
const db = require('../../DBConfig')
const control = require('../helpers/pagination');
const Factura = db.factura
const facturaCtrl = {}

facturaCtrl.findAll = async (req,res) => {
    try {
        const response = await Factura.findAndCountAll(control.pagination(req,'',null,null,null))
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
facturaCtrl.create = async (req, res) => {
    const datas = Object.assign({}, req.body)
    console.log(datas)
    try {
        const response = await Factura.create(datas)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(
            {
                msg: 'error create reserve',
                details: error
            }
        )
    }
}
facturaCtrl.update = async (req, res) => {
    const datas = await Object.assign({}, req.body)
    try {
        const response = await Factura.update(datas, { where: { id: datas.id }, returning: true, plain: true })
    	  res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: 'error update factura', details: error })
    }
}

facturaCtrl.findById = async (req, res) => {
    const id = req.params.id
    try {
        const response = await Factura.findOne({ where: { id: id }})
        res.status(200).json(response)
    } catch (error) {
        res.status(300).json({ msg: 'error to find factura', details: error })
    }
}

facturaCtrl.delete = async (req, res) => {
    const id = req.params.id
    try {
        await Factura.destroy({ where: { id: id } })
        res.status(200).json({ msg: 'deleted successfully -> factura id = ', id })
    } catch (error) {
        res.status(300).json({ msg: 'error delete factura', details: error })
    }
}
module.exports = facturaCtrl