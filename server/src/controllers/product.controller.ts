import { Request, Response } from 'express';
import Product from '../models/Product';
import { ApiError } from '../utils/ApiError';

class ProductController {
  // 獲取所有商品
  async getProducts(req: Request, res: Response) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      throw error;
    }
  }

  // 獲取單個商品
  async getProduct(req: Request, res: Response) {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        throw new ApiError(404, '商品不存在');
      }
      res.json(product);
    } catch (error) {
      throw error;
    }
  }

  // 創建商品
  async createProduct(req: Request, res: Response) {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      throw error;
    }
  }

  // 更新商品
  async updateProduct(req: Request, res: Response) {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!product) {
        throw new ApiError(404, '商品不存在');
      }
      res.json(product);
    } catch (error) {
      throw error;
    }
  }

  // 刪除商品
  async deleteProduct(req: Request, res: Response) {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        throw new ApiError(404, '商品不存在');
      }
      res.status(204).send();
    } catch (error) {
      throw error;
    }
  }
}

export const productController = new ProductController(); 