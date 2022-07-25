'use strict'

// call express routes
const express = require('express');
const router = express.Router();
const facturaCtrl = require('../controllers/factura.controller')
// this is root path to all routes => /api/
let rootPath = "/api"

// this are all routes API
router.get(rootPath + '/facturas', facturaCtrl.findAll)
router.post(rootPath + '/facturas', facturaCtrl.create)
router.put(rootPath + '/facturas', facturaCtrl.update)
router.get(rootPath + '/facturas/:id', facturaCtrl.findById)
router.delete(rootPath + '/facturas/:id', facturaCtrl.delete)

module.exports = router