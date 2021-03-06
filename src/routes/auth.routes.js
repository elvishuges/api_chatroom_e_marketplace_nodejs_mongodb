const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const authController = require('../controllers/auth.controller');
// teste simples
router.post('/login', authController.login);
router.post('/register', authController.register);
module.exports = router;