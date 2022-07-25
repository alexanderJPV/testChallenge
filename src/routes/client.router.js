'use strict'

// call express routes
const express = require('express');
const router = express.Router();
const clientCtrl = require('../controllers/client.controller')
// this is root path to all routes => /api/
let rootPath = "/api"

// this are all routes API
router.get(rootPath + '/clients', clientCtrl.findAll)
router.post(rootPath + '/clients', clientCtrl.create)
router.put(rootPath + '/clients', clientCtrl.update)
router.get(rootPath + '/clients/:id', clientCtrl.findById)
router.delete(rootPath + '/clients/:id', clientCtrl.delete)
router.get(rootPath + '/clients-search', clientCtrl.search)

module.exports = router