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

module.exports = router