const mongoose = require("../database/");
const Schema = mongoose.Schema;

let MarketPlaceSchema = new Schema({
  name: { type: String },
  productLimit: { type: Number },
  categoryLimit: { type: Number },
  categories: [{ type: String, ref: "Category" }],
  createdAt: { type: Date, default: Date.now },
});

// Exportar o modelo
module.exports = mongoose.model("MarketPlace", MarketPlaceSchema);
