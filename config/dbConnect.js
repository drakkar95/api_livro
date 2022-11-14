import mongoose from 'mongoose'

mongoose.connect(process.env.DB_PASSWORD)

let db = mongoose.connection;

export default db;