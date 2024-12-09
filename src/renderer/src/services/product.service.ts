import api from '../utils/api';
import type { Product } from '../types/product';

export const productService = {
  async getProducts() {
    return api.get<Product[]>('/products');
  },

  async getProduct(id: string) {
    return api.get<Product>(`/products/${id}`);
  },

  async createProduct(data: Partial<Product>) {
    return api.post<Product>('/products', data);
  },

  async updateProduct(id: string, data: Partial<Product>) {
    return api.put<Product>(`/products/${id}`, data);
  },

  async deleteProduct(id: string) {
    return api.delete(`/products/${id}`);
  },
}; 