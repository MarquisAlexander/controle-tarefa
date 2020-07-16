const express = require('express');

const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router('controletarefa.cb8wpsrs2beg.us-east-2.rds.amazonaws.com');

routes.post('/sessions', SessionController.create);

//rota para listagem das users cadastradas
routes.get('/users', UserController.index);
//rota para cadastro de users
routes.post('/users', UserController.create);

routes.get('/profile', ProfileController.index);

routes.get('/tb_tarefas',TaskController.index );
routes.post('/tb_tarefas',TaskController.create );
routes.delete('/tb_tarefas/:id', TaskController.delete);


module.exports = routes;