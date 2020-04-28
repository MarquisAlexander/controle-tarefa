const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router('controletarefa.cb8wpsrs2beg.us-east-2.rds.amazonaws.com');

routes.post('/sessions', SessionController.create);

//rota para listagem das users cadastradas
routes.get('/users', OngController.index);
//rota para cadastro de users
routes.post('/users', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/tb_tarefas',IncidentController.index );
routes.post('/tb_tarefas',IncidentController.create );
routes.delete('/tb_tarefas/:id', IncidentController.delete);


module.exports = routes;