"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// modelo de la clase principal 
const UsuarioSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    tipoDocumento: { type: String, required: true },
    numeroDocumento: { type: Number, required: true, unique: true },
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, required: true, default: "ADMINISTRADOR" },
    estado: { type: Boolean, required: true, default: true },
    createdAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() }
});
//model "NOMBRE DE BASE DE DATOS EN MONGOOSE"   será el nombre de la colección en mongoDB - estandar es minuscula 
const UsuarioModel = (0, mongoose_1.model)("usuario", UsuarioSchema);
exports.default = UsuarioModel;
//# sourceMappingURL=usuario.models.js.map