import { Router } from 'express';
import { productController } from '../controllers/product.controller';
import { auth } from '../middleware/auth';

const router = Router();

router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.post('/', auth, productController.createProduct);
router.put('/:id', auth, productController.updateProduct);
router.delete('/:id', auth, productController.deleteProduct);

export default router; 