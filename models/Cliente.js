import mongoose from "mongoose"

const clientesSchema = mongoose.Schema({
    id:{ type: String},
    nome:{ type: String, required: true},
    idade: { type: Number, required: true},
    endereco: { type: String, required: true},
})

const clientes = mongoose.model('clientes', clientesSchema)

export default clientes;