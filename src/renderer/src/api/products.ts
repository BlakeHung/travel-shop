import axios from 'axios';
import type { Product, ProductFilter } from '../types/product';
import { mockProducts } from '../mock/products';

// 模擬 API 延遲
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const productAPI = {
  // 獲取商品列表
  getProducts: async (filter?: ProductFilter) => {
    await delay(500); // 模擬網絡延遲
    let filteredProducts = [...mockProducts];

    if (filter) {
      if (filter.search) {
        filteredProducts = filteredProducts.filter(product =>
          product.name.toLowerCase().includes(filter.search!.toLowerCase()) ||
          product.description.toLowerCase().includes(filter.search!.toLowerCase())
        );
      }

      if (filter.category && filter.category !== 'all') {
        filteredProducts = filteredProducts.filter(product =>
          product.category === filter.category
        );
      }

      if (filter.minPrice) {
        filteredProducts = filteredProducts.filter(product =>
          product.price >= filter.minPrice!
        );
      }

      if (filter.maxPrice) {
        filteredProducts = filteredProducts.filter(product =>
          product.price <= filter.maxPrice!
        );
      }
    }

    return filteredProducts;
  },

  // 獲取單個商品
  getProduct: async (id: string) => {
    await delay(500);
    const product = mockProducts.find(p => p.id === id);
    if (!product) throw new Error('商品不存在');
    return product;
  },

  // 搜索商品
  searchProducts: async (keyword: string) => {
    await delay(500);
    return mockProducts.filter(product =>
      product.name.toLowerCase().includes(keyword.toLowerCase()) ||
      product.description.toLowerCase().includes(keyword.toLowerCase())
    );
  }
};