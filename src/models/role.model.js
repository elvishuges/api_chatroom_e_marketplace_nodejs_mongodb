const mongoose = require("../database/")
const Schema = mongoose.Schema;

let RoleSchema = new Schema({
    name: { type: String, require: true },
    createdAt: { type: Date, default: Date.now }
});
// Exportar o modelo
module.exports = mongoose.model('Role', RoleSchema);