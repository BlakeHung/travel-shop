import { Router } from 'express';
import { productController } from '../controllers/product.controller';

const router = Router();

// 獲取商品列表
router.get('/', productController.getProducts);

// 獲取單個商品
router.get('/:id', productController.getProduct);

// 獲取所有類別
router.get('/categories', productController.getCategories);

export default router; 