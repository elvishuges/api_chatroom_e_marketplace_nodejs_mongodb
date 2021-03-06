const mongoose = require("../database/")
const Schema = mongoose.Schema;

let UserShema = new Schema({
    username: { type: String, require: true },
    email: { type: String, unique: true, required: true, lowercase: true },
    // selected false para na buscar não retornar o password
    // porem, deve-se lembrar que no momento do login deve retornar a senha para comparar
    password: { type: String, required: true, select: false },
    role: { type: Schema.Types.ObjectId, ref: 'Role' },
    createdAt: { type: Date, default: Date.now }
});
// Exportar o modelo
module.exports = mongoose.model('User', UserShema);