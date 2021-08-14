const mongoose = require("../database/");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  name: { type: String },
  price: { type: Schema.Types.Decimal128 },
  category: { type: String, ref: "Category" },
  createdAt: { type: Date, default: Date.now },
});

// Exportar o modelo
module.exports = mongoose.model("Product", ProductSchema);
