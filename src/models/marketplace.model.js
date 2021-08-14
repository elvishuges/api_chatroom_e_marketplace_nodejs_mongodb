const mongoose = require("../database/");
const Schema = mongoose.Schema;

let MarketPlaceSchema = new Schema({
  name: { type: String },
  productLimit: { type: Number, default: 10 },
  categoryLimit: { type: Number, default: 5 },
  categories: [{ type: String, ref: "Category" }],
  products: [{ type: String, ref: "Product" }],
  createdAt: { type: Date, default: Date.now },
});

// Exportar o modelo
module.exports = mongoose.model("MarketPlace", MarketPlaceSchema);
