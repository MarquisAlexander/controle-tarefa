const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//rota para listagem das ongs cadastradas
routes.get('/ongs', OngController.index);
//rota para cadastro de ongs
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/tb_tarefas',IncidentController.index );
routes.post('/tb_tarefas',IncidentController.create );
routes.delete('/tb_tarefas/:id', IncidentController.delete);


module.exports = routes;