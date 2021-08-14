const express = require("express");
const router = express.Router();
// Colocar controller que ainda não foi criado
const mercadoController = require("../controllers/mercado.controller");
// teste simples
router.get("/categories", mercadoController.getCategories);
router.post("/categories", mercadoController.createCategory);

// marketplace
router.get("/marketPlace", mercadoController.createMarketPlace);
module.exports = router;
