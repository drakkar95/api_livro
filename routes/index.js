import express from 'express';
import livrosrouter from "./routes.js"
import clientesrouter from './clienteroutes.js'

const routes = (app) => {
    app.use(express.json(),
    livrosrouter,
    clientesrouter
    )
}

export default routes;