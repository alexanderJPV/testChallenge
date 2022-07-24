'use strict'

// call express routes
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/client.controller')
// this is root path to all routes => /api/
let rootPath = "/api"

// this are all routes API
router.get(rootPath + '/clients', userCtrl.findAll)

// router.post(rootPath + '/clients', (req,res) => {
//     res.send(" => Hello did a POST request from clients ")
// });
// router.put(rootPath + '/clients', userCtrl.update);
// router.get(rootPath + '/clients:id', userCtrl.findById);
// router.delete('/api/users/:id', userCtrl.delete);
// router.put('/api/users-upload-image', upload.single('image'), userCtrl.uploadImage);

module.exports = router