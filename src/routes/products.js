import express from 'express';
import ProductsController from '../../controller/ProductController.js';
const router = express.Router();

router.get('/:id/edit', ProductsController.updateProduct);
router.put('/:id/edit', ProductsController.updateStoreProduct);
router.get('/add', ProductsController.showadd);
router.post('/add', ProductsController.addProduct);
router.get('/:slug/', ProductsController.show);
router.get('/', ProductsController.index);

export default router;