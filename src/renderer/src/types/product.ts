export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ProductFilter {
  search?: string;
  category?: string;
}

// 可選：定義類別常量
export const CATEGORIES = {
  JAPAN: 'japan',
  KOREA: 'korea',
  THAILAND: 'thailand',
  SINGAPORE: 'singapore',
  INDONESIA: 'indonesia',
  VIETNAM: 'vietnam'
} as const;

// 可選：類別標籤映射
export const CATEGORY_LABELS: Record<string, string> = {
  [CATEGORIES.JAPAN]: '日本',
  [CATEGORIES.KOREA]: '韓國',
  [CATEGORIES.THAILAND]: '泰國',
  [CATEGORIES.SINGAPORE]: '新加坡',
  [CATEGORIES.INDONESIA]: '印尼',
  [CATEGORIES.VIETNAM]: '越南'
};
