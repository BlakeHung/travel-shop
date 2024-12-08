import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError';
import User from '../models/User';

// 擴展 Request 類型以包含用戶信息
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const auth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new ApiError(401, '請先登入');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const user = await User.findById((decoded as any).id).select('-password');

    if (!user) {
      throw new ApiError(401, '用戶不存在');
    }

    req.user = user;
    next();
  } catch (error) {
    next(new ApiError(401, '請先登入'));
  }
}; 