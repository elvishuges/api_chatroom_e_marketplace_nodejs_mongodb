const mongoose = require("../database/");
const Schema = mongoose.Schema;

let RoomSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
});

// Exportar o modelo
module.exports = mongoose.model("Room", RoomSchema);
