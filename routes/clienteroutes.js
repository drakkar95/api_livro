import express from 'express';

import ClienteController from '../controller/clientesController.js'


const clientController = new ClienteController();
let clientesrouter = express.Router();

clientesrouter
.get('/clientes', clientController.listarClientes)
.get('/clientes/:id',clientController.pickOneClient)
.post('/clientes', clientController.createClient)
.delete('/clientes/:id', clientController.deleteClient)
.put('/clientes/:id', clientController.updateClient)

export default clientesrouter