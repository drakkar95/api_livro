const express = require("express")

const app = express();

const PORT = 3333;

app.use(express.json())

let posts = [
    {id:1, name:'Teste1'},
    {id:2, name:'Teste2'},
    {id:3, name:'Teste3'},
    {id:4, name:'Teste4'},
    {id:5, name:'Teste5'},
   
]

app.listen( PORT, () => console.log('Server funcionando'));

app.get('/rota', (req,res) =>{
    res.status(200).json({
        nome:'nome',
        status: 'req.params.status',
        dados: posts,
    })

})

app.post('/rota', (req,res) =>{
    let newpost = {
        id:6,
        nome: req.query.post};
    posts.push(newpost);
    res.status(201).json({
        msg:"Post realizado",
        dados: posts
    })

    console.log(posts)
})

app.delete('/rota/:id', (req,res) =>{
    
    res.status(201).json({
        msg:"Post realizado",
        dados: posts
    })

    console.log(posts)
}

)