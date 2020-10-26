const { Router } = require('express');

const ProductController = require('./app/controllers/ProductController');
const CostumerController = require('./app/controllers/CostumerController');
const SupplierController = require('./app/controllers/SupplierController');
const UserController = require('./app/controllers/UserController');
const LoginController = require('./app/controllers/LoginController');
const ServiceController = require('./app/controllers/ServiceController');

const routes = Router();

// Produtos
routes.get('/products', ProductController.listAll);
routes.post('/products', ProductController.create);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.delete);

// Clientes
routes.get('/costumers', CostumerController.listAll);
routes.post('/costumers', CostumerController.create);
routes.put('/costumer/:id', CostumerController.update);
routes.delete('/costumer/:id', CostumerController.delete);

// Fornecedores
routes.get('/suppliers', SupplierController.listAll);
routes.post('/suppliers', SupplierController.create);
routes.put('/supplier/:id', SupplierController.update);
routes.delete('/supplier/:id', SupplierController.delete);

// Usuarios
routes.get('/users', UserController.listAll);
routes.post('/users', UserController.create);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

// Servicos
routes.get('/services', ServiceController.listAll);
routes.post('/services', ServiceController.create);
routes.put('/service/:id', ServiceController.update);
routes.delete('/service/:id', ServiceController.delete);

// Login
routes.post('/login', LoginController.validate);

module.exports = routes;
