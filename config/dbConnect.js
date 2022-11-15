import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://testuser:lfuImXaGbWPtyvi5@cluster0.ib9vudl.mongodb.net/livros-teste")

let db = mongoose.connection;

export default db;