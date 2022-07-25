'use strict'

// call express routes
const express = require('express');
const router = express.Router();
// const roomtCtrl = require('../controllers/room.controller')
// this is root path to all routes => /api/
let rootPath = "/api"

// this are all routes API
// router.get(rootPath + '/rooms', clientCtrl.findAll)
router.get(rootPath + '/rooms', (req,res) => {
    res.send("room is send")
})
// router.post(rootPath + '/clients', clientCtrl.create)
// router.put(rootPath + '/clients', clientCtrl.update)
// router.get(rootPath + '/clients/:id', clientCtrl.findById)
// router.delete(rootPath + '/clients/:id', clientCtrl.delete)

module.exports = router