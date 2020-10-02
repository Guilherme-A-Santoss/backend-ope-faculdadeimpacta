import { Router } from 'express';

import ProductController from './app/controllers/ProductController';
import CostumerController from './app/controllers/CostumerController';
import SupplierController from './app/controllers/SupplierController';

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

export default routes;
