import { Router } from 'express';
import { productController } from '../controllers/product.controller';
import { auth } from '../middleware/auth';

const router = Router();

// 公開路由
router.get('/', (req, res) => productController.getProducts(req, res));
router.get('/:id', (req, res) => productController.getProduct(req, res));

// 需要認證的路由
router.post('/', auth, (req, res) => productController.createProduct(req, res));
router.put('/:id', auth, (req, res) => productController.updateProduct(req, res));
router.delete('/:id', auth, (req, res) => productController.deleteProduct(req, res));

export default router; 