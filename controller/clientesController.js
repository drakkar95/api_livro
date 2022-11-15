import { response } from 'express'
import clientes from '../models/Cliente.js'

class ClientController {
    listarClientes = (req,res) => {
        clientes.find((err,clientes) => {
            res.status(200).json(clientes)
        })  
    }

    pickOneClient = (req,res) => {
        const {id} = req.params;
        clientes.findById(id,(err,clientes) => {
            if(err){
                res.status(400).json({msg: `falha ao pegar os dados do Cliente: ${err.msg}`})
            } else{
                res.status(200).json(clientes)
            }
        })
    }

    createClient = (req,res) => {
        let cliente = clientes( req.body);
        
       cliente.save((err) => {
            if(err){
                res.status(500).json({msg: `falha ao cadastrar o Cliente ${err.msg}`})
            } else{
                res.status(201).json(cliente.toJSON())
            }
           
        }
        )
    }
    deleteClient = (req,res) => {
        const {id} = req.params;
        
        clientes.findByIdAndDelete( id, (err) => {
            if(!err){
                res.status(200).send({msg:'Cadastro do Cliente Removido'});
            }else{
                res.status(500).send({msg:err.mensage});
            }
        })

    }

    updateClient = (req,res) => {
        const {id} = req.params;
        clientes.findByIdAndUpdate(id,{$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({msg:'Cadastro do Cliente Atualizado'});
            }else{
                res.status(500).send({msg:err.mensage});
            }
        })
    }
}

export default ClientController;