import { create } from 'zustand';
import { productAPI } from '../api/products';
import type { Product, ProductFilter } from '../types/product';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  filter: ProductFilter;
  selectedProduct: Product | null;
  
  // 加入初始化方法
  initializeStore: () => Promise<void>;
  fetchProducts: (filter?: ProductFilter) => Promise<void>;
  searchProducts: (keyword: string) => Promise<void>;
  setFilter: (filter: ProductFilter) => void;
  selectProduct: (product: Product) => void;
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  loading: false,
  error: null,
  filter: {},
  selectedProduct: null,

  // 加入初始化方法實作
  initializeStore: async () => {
    await get().fetchProducts();
  },

  fetchProducts: async (filter?: ProductFilter) => {
    try {
      set({ loading: true, error: null });
      const products = await productAPI.getProducts(filter || {});
      set({ products, loading: false });
    } catch (error) {
      set({ error: '獲取商品列表失敗', loading: false });
    }
  },

  searchProducts: async (keyword: string) => {
    try {
      set({ loading: true, error: null });
      const products = await productAPI.searchProducts(keyword);
      set({ products, loading: false });
    } catch (error) {
      set({ error: '搜索商品失敗', loading: false });
    }
  },

  setFilter: (filter: ProductFilter) => {
    set({ filter });
    get().fetchProducts(filter);
  },

  selectProduct: (product: Product) => {
    set({ selectedProduct: product });
  },
}));
