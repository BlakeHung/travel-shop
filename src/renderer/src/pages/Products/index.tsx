import { useState, useEffect } from 'react';
import { Spin, message } from 'antd';
import { productService } from '../../services/product.service';
import ProductList from '../../components/ProductList';
import type { Product } from '../../types/product';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productService.getProducts();
        setProducts(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : '獲取商品失敗';
        setError(errorMessage);
        message.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <ProductList 
        products={products}
        loading={loading}
        error={error}
      />
    </div>
  );
}
