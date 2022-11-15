import { response } from 'express'
import livros from '../models/Livro.js'

class LivroController {
    listarLivros = (req,res) => {
        livros.find((err,livros) => {
            res.status(200).json(livros)
        })  
    }

    pickOneBook = (req,res) => {
        const {id} = req.params;
        livros.findById(id,(err,livros) => {
            if(err){
                res.status(400).json({msg: `falha ao pegar o livro: ${err.msg}`})
            } else{
                res.status(200).json(livros)
            }
        })
    }

    createBook = (req,res) => {
        let book = livros( req.body);
        
        book.save((err) => {
            if(err){
                res.status(500).json({msg: `falha ao cadastrar ${err.msg}`})
            } else{
                res.status(201).json(book.toJSON())
            }
           
        }
        )
    }
    deleteBook = (req,res) => {
        const {id} = req.params;
        
        livros.findByIdAndDelete( id, (err) => {
            if(!err){
                res.status(200).send({msg:'Livro Removido'});
            }else{
                res.status(500).send({msg:err.mensage});
            }
        })

    }

    updateBook = (req,res) => {
        const {id} = req.params;
        livros.findByIdAndUpdate(id,{$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({msg:'Livro Atualizado'});
            }else{
                res.status(500).send({msg:err.mensage});
            }
        })
    }
}

export default LivroController;