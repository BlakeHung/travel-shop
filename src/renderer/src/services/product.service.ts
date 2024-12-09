import api from '../utils/api';
import type { Product, ProductFilter } from '../types/product';

export const productService = {
  // 獲取商品列表（支援篩選）
  async getProducts(filter?: ProductFilter) {
    const { data } = await api.get<Product[]>('/products', { 
      params: filter 
    });
    return data;
  },

  // 獲取單個商品
  async getProduct(id: string) {
    const { data } = await api.get<Product>(`/products/${id}`);
    return data;
  },

  // 獲取所有類別
  async getCategories() {
    const { data } = await api.get<string[]>('/products/categories');
    return data;
  }
}; 