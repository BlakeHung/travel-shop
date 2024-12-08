import { Router } from 'express';
import authRoutes from './auth.routes';
import productRoutes from './product.routes';
import testRoutes from './test.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/test', testRoutes);

export default router; 