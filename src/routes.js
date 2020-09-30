import { Router } from 'express';

import ProductController from './app/controllers/ProductController';
import CostumerController from './app/controllers/CostumerController';

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

export default routes;
