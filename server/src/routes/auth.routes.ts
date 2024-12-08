import { Router } from 'express';
import { authController } from '../controllers/auth.controller';
import { auth } from '../middleware/auth';
import { validateRequest } from '../middleware/validateRequest';
import { registerSchema, loginSchema } from '../validations/auth.validation';

const router = Router();

router.post('/register', validateRequest(registerSchema), authController.register);
router.post('/login', validateRequest(loginSchema), authController.login);
router.get('/me', auth, authController.getMe);

export default router; 