'use strict'
const db = require('../../DBConfig')
const control = require('../helpers/pagination');
const Sequelize = require('sequelize');
const Reserve = db.reserve
const Client = db.client
const Room = db.room
const reserveCtrl = {}

const clientAttributes = [ 'id' ];

reserveCtrl.findAll = async (req,res) => {
    try {
        const response = await Reserve.findAndCountAll(control.pagination(req,'', Client, clientAttributes , null))
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

reserveCtrl.search = async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const keyword = req.query.keyword ? req.query.keyword.toUpperCase() : '';
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 10;
    const offset = page * pageSize;
    const limit = offset + pageSize;
    const value = req.query.sort ? req.query.sort : 'id';
    const type = req.query.type ? req.query.type.toUpperCase() : 'ASC';
    let queryOne = `UPPER(reserve.status) like '%${keyword}%'`;
    let searchByRoleOrKeyword = Sequelize.literal(`${queryOne}`);
    try {
        const category = await Reserve.findAndCountAll({ offset: parseInt(offset), limit: parseInt(pageSize), order: [[value, type]], where: { searchByRoleOrKeyword }, distinct: true, include: [{ all: true }] }); 
        const convert = category.count / 10;
        const pages = convert > Math.round(convert) ? Math.round(convert) + 1 : Math.round(convert);
        const elements = category.count;
        const rows = category.rows;
        res.status(200).json(
            {
                elements,
                page,
                pageSize,
                pages,
                rows
            }
        );
    } catch (error) {
        res.status(500).json({ msg: "error", details: error });
    }
}

module.exports = reserveCtrl