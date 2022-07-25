'use strict'

// call express routes
const express = require('express');
const router = express.Router();
const paymentCtrl = require('../controllers/payment.controller')
// this is root path to all routes => /api/
let rootPath = "/api"

// this are all routes API
router.get(rootPath + '/payments', paymentCtrl.findAll)
router.post(rootPath + '/payments', paymentCtrl.create)
router.put(rootPath + '/payments', paymentCtrl.update)
router.get(rootPath + '/payments/:id', paymentCtrl.findById)
router.delete(rootPath + '/payments/:id', paymentCtrl.delete)
router.get(rootPath + '/payments-factura/:id', paymentCtrl.factura) // enviar id de fatura

module.exports = router