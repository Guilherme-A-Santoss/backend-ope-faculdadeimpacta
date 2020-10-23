const { Router } = require('express');

const ProductController = require('./app/controllers/ProductController');
const CostumerController = require('./app/controllers/CostumerController');
const SupplierController = require('./app/controllers/SupplierController');
const UserController = require('./app/controllers/UserController');
const LoginController = require('./app/controllers/LoginController');
const ServiceController = require('./app/controllers/ServiceController');

const routes = Router();

// Produtos
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.destroy);

// Clientes
routes.get('/costumers', CostumerController.index);
routes.post('/costumers', CostumerController.store);
routes.put('/costumer/:id', CostumerController.update);
routes.delete('/costumer/:id', CostumerController.destroy);

// Fornecedores
routes.get('/suppliers', SupplierController.index);
routes.post('/suppliers', SupplierController.store);
routes.put('/supplier/:id', SupplierController.update);
routes.delete('/supplier/:id', SupplierController.destroy);

// Usuarios
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.destroy);

// Servicos
routes.get('/services', ServiceController.index);
routes.post('/services', ServiceController.store);
routes.put('/service/:id', ServiceController.update);
routes.delete('/service/:id', ServiceController.destroy);

// Login
routes.post('/login', LoginController.validate);

module.exports = routes;
