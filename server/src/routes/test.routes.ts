import { Router } from 'express';
import { ApiError } from '../utils/ApiError';

const router = Router();

router.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

router.get('/error', (req, res, next) => {
  try {
    throw new Error('測試錯誤');
  } catch (error) {
    next(error);
  }
});

router.get('/api-error', (req, res, next) => {
  try {
    throw new ApiError(400, '測試 API 錯誤');
  } catch (error) {
    next(error);
  }
});

export default router; 