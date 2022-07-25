'use strict'
const db = require('../../DBConfig')
const Client = db.client
const clientCtrl = {}

// clientCtrl.findAll = (req,res) => {
//     res.send("until over here =====>")
// }
clientCtrl.findAll = async (req,res) => {
    try {
        const response = await Client.findAll()
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
clientCtrl.create = async (req, res) => {
    const datas = Object.assign({}, req.body);
    console.log(datas)
    try {
        const response = await Client.create(datas);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: 'error create client', details: error });
    }
}
clientCtrl.update = async (req, res) => {
    const datas = await Object.assign({}, req.body);
    try {
        const response = await Client.update(datas, { where: { id: datas.id }, returning: true, plain: true });
    	  res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: 'error update client', details: error });
    }
}

clientCtrl.findById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await Client.findOne({ where: { id: id }});
        res.status(200).json(response);
    } catch (error) {
        res.status(300).json({ msg: 'error to find client', details: error });
    }
}

clientCtrl.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await Client.destroy({ where: { id: id } })
        res.status(200).json({ msg: 'deleted successfully -> client id = ', id });
    } catch (error) {
        res.status(300).json({ msg: 'error delete client', details: error });
    }
}
module.exports = clientCtrl