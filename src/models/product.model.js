const mongoose = require("../database/");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  name: { type: String },
  categories: { type: String, ref: "Category" },
  createdAt: { type: Date, default: Date.now },
});

// Exportar o modelo
module.exports = mongoose.model("Product", ProductSchema);
