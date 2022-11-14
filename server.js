import express from 'express'
import db from "./config/dbConnect.js"
import LivroController from './controller/livrosController.js';
import livros from './models/Livro.js'


const app = express();
const PORT = 3333;

db.on("error", console.log.bind(console,'Erro de conexão'))
db.once("open",() => {
    console.log('Conexão com o banco feito com sucesso')
})



app.use(express.json())

//let posts = [
//   {id:1, name:'Teste1'},
//    {id:2, name:'Teste2'},
//  {id:3, name:'Teste3'},
//   {id:4, name:'Teste4'},
//  {id:5, name:'Teste5'},
//  
// ]

const livroController = new LivroController();

app.listen( PORT, () => console.log('Server funcionando'));

app.get('/', (req,res) => {
    res.send("Bem Vindo a esta Api inicial")
})

app.get('/livros', livroController.listarLivros)

app.post('/rota', (req,res) =>{
    let newpost = {
        id:posts.length+1,
        nome: req.query.post};
    posts.push(newpost);
    res.status(201).json({
        msg:"Post realizado",
        dados: posts
    })

    console.log(posts)
})

app.delete('/rota/:id', (req,res) =>{
    let {id} = req.params
    let findPost = posts.findIndex(element => {
        return element.id == id
    } )

    posts.splice(id,1)

    res.status(202).json({
        msg:"Post deletado",
        dados: findPost
    })

    console.log(posts)
}

)