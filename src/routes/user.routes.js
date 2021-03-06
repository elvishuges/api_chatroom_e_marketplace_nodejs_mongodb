const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const userConrtoller = require('../controllers/users.controller');
// teste simples
router.get('/', userConrtoller.find);
module.exports = router;