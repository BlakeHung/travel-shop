import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product';

dotenv.config();

const mockProducts = [
  {
    name: '日本東京自由行套票',
    price: 25000,
    description: '含機票、住宿 5 天 4 夜',
    image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800',
    category: 'japan',
    stock: 10
  },
  {
    name: '韓國首爾深度遊',
    price: 20000,
    description: '含機票、住宿 4 天 3 夜',
    image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800',
    category: 'korea',
    stock: 15
  },
  {
    name: '泰國曼谷美食之旅',
    price: 18000,
    description: '含機票、住宿 5 天 4 夜',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800',
    category: 'thailand',
    stock: 20
  },
  {
    name: '新加坡環球影城套票',
    price: 22000,
    description: '含機票、住宿 4 天 3 夜',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800',
    category: 'singapore',
    stock: 12
  },
  {
    name: '峇里島度假套餐',
    price: 30000,
    description: '含機票、住宿 6 天 5 夜',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
    category: 'indonesia',
    stock: 8
  },
  {
    name: '越南河內文化之旅',
    price: 15000,
    description: '含機票、住宿 5 天 4 夜',
    image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800',
    category: 'vietnam',
    stock: 25
  }
];

async function importProducts() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('Connected to MongoDB');

    // 清空現有商品
    await Product.deleteMany({});
    console.log('Existing products deleted');

    // 導入新商品
    await Product.insertMany(mockProducts);
    console.log('Products imported successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error importing products:', error);
    process.exit(1);
  }
}

importProducts(); 