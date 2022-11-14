import mongoose from "mongoose"

const livrosSchema = mongoose.Schema({
    id:{ type: String},
    titulo:{ type: String, required: true},
    autor: { type: String, required: true},
    editora: { type: String, required: true},
    numeroPagina:{ type: Number},
})

const livros = mongoose.model('livros', livrosSchema)

export default livros;