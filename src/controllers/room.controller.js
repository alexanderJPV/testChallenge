'use strict'
const db = require('../../DBConfig')
const control = require('../helpers/pagination');
const Sequelize = require('sequelize');
const Room = db.room
const roomCtrl = {}

roomCtrl.findAll = async (req,res) => {
    try {
        const response = await Room.findAndCountAll(control.pagination(req,'',null,null,null))
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

roomCtrl.search = async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const keyword = req.query.keyword ? req.query.keyword.toUpperCase() : '';
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 10;
    const offset = page * pageSize;
    const limit = offset + pageSize;
    const value = req.query.sort ? req.query.sort : 'id';
    const type = req.query.type ? req.query.type.toUpperCase() : 'ASC';
    let queryOne = `UPPER(codigo) like '%${keyword}%' or cast(nroBeds as CHAR) like '%${req.query.keyword}%' or cast(price as CHAR) like '%${req.query.keyword}%' or UPPER(status) like '%${keyword}%'`;
    let searchByRoleOrKeyword = Sequelize.literal(`${queryOne}`);
    try {
        const category = await Room.findAndCountAll({ offset: parseInt(offset), limit: parseInt(pageSize), order: [[value, type]], where: { searchByRoleOrKeyword } }); 
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
        res.status(500).json({ msg: "error", details: err });
    }
}

module.exports = roomCtrl