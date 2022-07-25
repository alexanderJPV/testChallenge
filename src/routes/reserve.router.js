'use strict'

// call express routes
const express = require('express');
const router = express.Router();
const reserveCtrl = require('../controllers/reserve.controller')
// this is root path to all routes => /api/
let rootPath = "/api"
// this are all routes API
router.get(rootPath + '/reserves', reserveCtrl.findAll)
router.post(rootPath + '/reserves', reserveCtrl.create)
router.put(rootPath + '/reserves', reserveCtrl.update)
router.get(rootPath + '/reserves/:id', reserveCtrl.findById)
router.delete(rootPath + '/reserves/:id', reserveCtrl.delete)
router.get(rootPath + '/reserves-clients/:id', reserveCtrl.findAllByClientId)
router.get(rootPath + '/reserves-rooms/:id', reserveCtrl.findAllByRoomId)
router.get(rootPath + '/reserves-search', reserveCtrl.search)

module.exports = router