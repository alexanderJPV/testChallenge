'use strict'
const db = require('../../DBConfig')
const control = require('../helpers/pagination');
const Reserve = db.reserve
const Client = db.client
const Room = db.room
const reserveCtrl = {}

reserveCtrl.findAll = async (req,res) => {
    try {
        const response = await Reserve.findAndCountAll(control.pagination(req,'',null,null,null))
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
reserveCtrl.findAllByClientId = async (req,res) => {
    const clientId = req.params.id;
    try {
        const query = { where: { clientId: clientId }, include: [{ model: Client }]}
        const response = await Reserve.findAndCountAll(control.pagination(req, null, null, null, query))
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
reserveCtrl.findAllByRoomId = async (req,res) => {
    const roomId = req.params.id;
    try {
        const query = { where: { roomId: roomId }, include: [{ model: Room }]}
        const response = await Reserve.findAndCountAll(control.pagination(req, null, null, null, query))
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
reserveCtrl.create = async (req, res) => {
    const datas = Object.assign({}, req.body)
    try {
        if(datas.clientId != null  && datas.roomId != null){
            const response = await Reserve.create(datas)
            res.status(200).json(response)
        }else{
            res.status(500).json(
                {
                    msg: 'There are not cleinteId or roomId'
                }
            )
        }
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
        if(datas.clientId != null  && datas.roomId != null){
            const response = await Reserve.update(datas, { where: { id: datas.id }, returning: true, plain: true })
            res.status(200).json(response)
        }else{
            res.status(500).json(
                {
                    msg: 'There are not cleinteId or roomId'
                }
            )
        }
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