import express from 'express'
import db from "./config/dbConnect.js"
import LivroController from './controller/livrosController.js';
import livros from './models/Livro.js'
import routes from './routes/index.js'

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


routes(app);

module.exports = app;