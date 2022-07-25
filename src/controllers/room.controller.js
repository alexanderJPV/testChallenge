'use strict'
const db = require('../../DBConfig')
const Room = db.room
const roomCtrl = {}

roomCtrl.findAll = async (req,res) => {
    try {
        const response = await Room.findAll()
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
roomCtrl.create = async (req, res) => {
    const datas = Object.assign({}, req.body)
    console.log(datas)
    try {
        const response = await Room.create(datas)
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
roomCtrl.update = async (req, res) => {
    const datas = await Object.assign({}, req.body);
    try {
        const response = await Room.update(datas, { where: { id: datas.id }, returning: true, plain: true });
    	  res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: 'error update room', details: error });
    }
}

roomCtrl.findById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await Room.findOne({ where: { id: id }});
        res.status(200).json(response);
    } catch (error) {
        res.status(300).json({ msg: 'error to find room', details: error });
    }
}

roomCtrl.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await Room.destroy({ where: { id: id } })
        res.status(200).json({ msg: 'deleted successfully -> room id = ', id });
    } catch (error) {
        res.status(300).json({ msg: 'error delete room', details: error });
    }
}
module.exports = roomCtrl