const express = require("express");
const router = express.Router();
// Colocar controller que ainda não foi criado
const roomController = require("../controllers/room.controller");
// teste simples
router.get("/", roomController.findAll);
router.post("/create", roomController.create);
module.exports = router;
