import express from 'express';
import LivroController from '../controller/livrosController.js';


const livroController = new LivroController();
let livrosrouter = express.Router();

livrosrouter
.get('/livros', livroController.listarLivros)
.get('/livros/:id',livroController.pickOneBook)
.post('/livros', livroController.createBook)
.delete('/livros/:id', livroController.deleteBook)
.put('/livros/:id', livroController.updateBook)

export default livrosrouter