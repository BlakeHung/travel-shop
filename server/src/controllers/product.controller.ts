import { Request, Response } from 'express';
import Product from '../models/Product';

export const productController = {
  // 獲取商品列表
  async getProducts(req: Request, res: Response) {
    try {
      const { search, category } = req.query;
      
      // 建立篩選條件
      const filter: any = {};
      
      // 如果有搜尋關鍵字
      if (search) {
        filter.$or = [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } }
        ];
      }

      // 如果有類別篩選
      if (category && category !== 'all') {
        filter.category = category;
      }

      const products = await Product.find(filter)
        .sort({ createdAt: -1 }); // 最新的商品排在前面
      
      res.json(products);
      
    } catch (error) {
      console.error('Error getting products:', error);
      res.status(500).json({ message: '獲取商品列表失敗' });
    }
  },

  // 獲取單個商品
  async getProduct(req: Request, res: Response) {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: '商品不存在' });
      }
      res.json(product);
    } catch (error) {
      console.error('Error getting product:', error);
      res.status(500).json({ message: '獲取商品詳情失敗' });
    }
  },

  // 獲取所有類別
  async getCategories(req: Request, res: Response) {
    try {
      const categories = await Product.distinct('category');
      res.json(categories);
    } catch (error) {
      console.error('Error getting categories:', error);
      res.status(500).json({ message: '獲取類別列表失敗' });
    }
  }
}; 