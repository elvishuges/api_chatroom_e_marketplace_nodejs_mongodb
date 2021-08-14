const mongoose = require("../database/");
const Schema = mongoose.Schema;

let ShoppingSchema = new Schema({
  active: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  user: { type: String, require: true },
  products: [{ type: String, ref: "Product" }],
});
//Exportar o modelo
module.exports = mongoose.model("Shopping", ShoppingSchema);
