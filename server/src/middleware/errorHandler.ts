import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      message: err.message
    });
  }

  return res.status(500).json({
    message: '服務器錯誤'
  });
}; 