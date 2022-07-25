'use strict'

// call express routes
const express = require('express');
const router = express.Router();
const roomtCtrl = require('../controllers/room.controller')
// this is root path to all routes => /api/
let rootPath = "/api"
// this are all routes API
router.get(rootPath + '/rooms', roomtCtrl.findAll)
router.post(rootPath + '/rooms', roomtCtrl.create)
router.put(rootPath + '/rooms', roomtCtrl.update)
router.get(rootPath + '/rooms/:id', roomtCtrl.findById)
router.delete(rootPath + '/rooms/:id', roomtCtrl.delete)

module.exports = router