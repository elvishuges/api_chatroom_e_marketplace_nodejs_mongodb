const express = require("express");
const router = express.Router();
// Colocar controller que ainda não foi criado
const testController = require("../controllers/test.controller");
// teste simples
router.get("/", testController.welcome);
module.exports = router;
