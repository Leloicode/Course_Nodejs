import express from 'express';
import ProductsController from '../../controller/ProductController.js';
const router = express.Router();

router.use('/productdetail', ProductsController.show);
router.use('/', ProductsController.index);

export default router;