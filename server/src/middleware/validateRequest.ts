import { Request, Response, NextFunction } from 'express';
import { Schema, ValidationErrorItem } from 'joi';
import { ApiError } from '../utils/ApiError';

export const validateRequest = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    
    if (error) {
      const errorMessage = error.details
        .map((detail: ValidationErrorItem) => detail.message)
        .join(', ');
      next(new ApiError(400, errorMessage));
      return;
    }
    
    next();
  };
}; 