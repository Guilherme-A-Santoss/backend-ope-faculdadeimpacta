const { Router } = require('express');

const ProductController = require('./app/controllers/ProductController');
const CustomerController = require('./app/controllers/CustomerController');
const SupplierController = require('./app/controllers/SupplierController');
const UserController = require('./app/controllers/UserController');
const ServiceController = require('./app/controllers/ServiceController');
const SessionController = require('./app/controllers/SessionController');
const authMiddleware = require('./app/middlewares/authMiddleware')
const permissionMiddleware = require('./app/middlewares/permissionMiddleware')

const routes = Router();

// Login
routes.post('/login', SessionController.login);

// Todas as rotas abaixo deste middleware precisam estarem autenticadas
routes.use(authMiddleware)

// Produtos
routes.get('/products', ProductController.listAll);
routes.post('/products', ProductController.create);
routes.get('/product/:id', ProductController.getProduct);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.delete);

// Clientes
routes.get('/customers', CustomerController.listAll);
routes.get('/customer/:id', CustomerController.getCostumer);
routes.post('/customers', CustomerController.create);
routes.put('/customer/:id', CustomerController.update);
routes.delete('/customer/:id', CustomerController.delete);

// Servicos
routes.get('/services', ServiceController.listAll);
routes.get('/service/:id', ServiceController.getService);
routes.post('/services', ServiceController.create);
routes.put('/service/:id', ServiceController.update);
routes.delete('/service/:id', ServiceController.delete);

// Fornecedores
routes.get('/suppliers', SupplierController.listAll);
routes.get('/supplier/:id', SupplierController.getSupplier);

routes.use(permissionMiddleware)

// Fornecedores
routes.post('/suppliers', SupplierController.create);
routes.put('/supplier/:id', SupplierController.update);
routes.delete('/supplier/:id', SupplierController.delete);

// Usuarios
routes.post('/users', UserController.create);
routes.get('/users', UserController.listAll);
routes.get('/user/:id', UserController.getUser);
routes.put('/user', UserController.update);
routes.delete('/user', UserController.delete);



module.exports = routes;
