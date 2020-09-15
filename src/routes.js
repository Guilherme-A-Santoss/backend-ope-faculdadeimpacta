import { Router } from 'express';

import ProductController from './app/controllers/ProductController';

const routes = Router();

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.destroy);

export default routes;
