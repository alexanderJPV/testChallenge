'use strict'
const db = require('../../DBConfig')
const Reserve = db.reserve
const reserveCtrl = {}

reserveCtrl.findAll = async (req,res) => {
    try {
        const response = await Reserve.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(
            {
                msg: "error",
                details: error
            }
        )
    }
}
reserveCtrl.create = async (req, res) => {
    const datas = Object.assign({}, req.body)
    console.log(datas)
    try {
        const response = await Reserve.create(datas)
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
reserveCtrl.update = async (req, res) => {
    const datas = await Object.assign({}, req.body)
    try {
        const response = await Reserve.update(datas, { where: { id: datas.id }, returning: true, plain: true })
    	  res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: 'error update reserve', details: error })
    }
}

reserveCtrl.findById = async (req, res) => {
    const id = req.params.id
    try {
        const response = await Reserve.findOne({ where: { id: id }})
        res.status(200).json(response)
    } catch (error) {
        res.status(300).json({ msg: 'error to find reserve', details: error })
    }
}

reserveCtrl.delete = async (req, res) => {
    const id = req.params.id
    try {
        await Reserve.destroy({ where: { id: id } })
        res.status(200).json({ msg: 'deleted successfully -> reserve id = ', id })
    } catch (error) {
        res.status(300).json({ msg: 'error delete reserve', details: error })
    }
}
module.exports = reserveCtrl