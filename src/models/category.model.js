const mongoose = require("../database/");
const Schema = mongoose.Schema;

let CategorySchema = new Schema({
  name: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Exportar o modelo
module.exports = mongoose.model("Category", CategorySchema);
