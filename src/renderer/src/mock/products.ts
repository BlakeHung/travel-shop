import { Product } from '../types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '日本東京自由行套票',
    price: 25000,
    description: '含機票、住宿 5 天 4 夜',
    image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800',
    category: 'japan',
    stock: 10,
    createdAt: '2024-03-10T00:00:00.000Z',
    updatedAt: '2024-03-10T00:00:00.000Z'
  },
  {
    id: '2',
    name: '韓國首爾深度遊',
    price: 20000,
    description: '含機票、住宿 4 天 3 夜',
    image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800',
    category: 'korea',
    stock: 15,
    createdAt: '2024-03-10T00:00:00.000Z',
    updatedAt: '2024-03-10T00:00:00.000Z'
  },
  {
    id: '3',
    name: '泰國曼谷美食之旅',
    price: 18000,
    description: '含機票、住宿 5 天 4 夜',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800',
    category: 'thailand',
    stock: 20,
    createdAt: '2024-03-10T00:00:00.000Z',
    updatedAt: '2024-03-10T00:00:00.000Z'
  },
  {
    id: '4',
    name: '新加坡環球影城套票',
    price: 22000,
    description: '含機票、住宿 4 天 3 夜',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800',
    category: 'singapore',
    stock: 12,
    createdAt: '2024-03-10T00:00:00.000Z',
    updatedAt: '2024-03-10T00:00:00.000Z'
  },
  {
    id: '5',
    name: '峇里島度假套餐',
    price: 30000,
    description: '含機票、住宿 6 天 5 夜',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
    category: 'indonesia',
    stock: 8,
    createdAt: '2024-03-10T00:00:00.000Z',
    updatedAt: '2024-03-10T00:00:00.000Z'
  },
  {
    id: '6',
    name: '越南河內文化之旅',
    price: 15000,
    description: '含機票、住宿 5 天 4 夜',
    image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800',
    category: 'vietnam',
    stock: 25,
    createdAt: '2024-03-10T00:00:00.000Z',
    updatedAt: '2024-03-10T00:00:00.000Z'
  }
];

export const categories = [
  { value: 'japan', label: '日本' },
  { value: 'korea', label: '韓國' },
  { value: 'thailand', label: '泰國' },
  { value: 'singapore', label: '新加坡' },
  { value: 'indonesia', label: '印尼' },
  { value: 'vietnam', label: '越南' }
];
