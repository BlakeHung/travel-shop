import React, { useEffect } from 'react';
import { Typography } from 'antd';
import ProductList from '../../components/ProductList';
import { useProductStore } from '../../stores/useProductStore';

const { Title } = Typography;

const ProductsPage: React.FC = () => {
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>商品列表</Title>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
