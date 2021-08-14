const express = require("express");
const router = express.Router();
// Colocar controller que ainda não foi criado
const mercadoController = require("../controllers/mercado.controller");
// teste simples
router.get("/categories", mercadoController.getCategories);
router.post("/categories", mercadoController.createCategory);

// marketplace
router.post("/marketplace", mercadoController.createMarketplace);
router.get("/marketplace", mercadoController.getMarketplace);

// user
router.post("/user/login", mercadoController.loginUser);
router.post("/user/register", mercadoController.registerUser);
module.exports = router;
