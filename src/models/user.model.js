const mongoose = require("../database/");
const Schema = mongoose.Schema;

let UserShema = new Schema({
  username: { type: String, require: true },
  email: { type: String, unique: true, required: true, lowercase: true },
  password: { type: String, required: true, select: false },
  role: { type: String, ref: "Role" },
  createdAt: { type: Date, default: Date.now },
});

// Exportar o modelo
module.exports = mongoose.model("User", UserShema);
