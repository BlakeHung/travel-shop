import React from 'react';
import { Row, Col, Input, Select, Spin } from 'antd';
import { useProductStore } from '../../stores/useProductStore';
import ProductCard from '../ProductCard';

const { Search } = Input;

const ProductList: React.FC = () => {
  const { products, loading, error, searchProducts, setFilter } = useProductStore();

  const handleSearch = (value: string) => {
    searchProducts(value);
  };

  const handleFilterChange = (value: string) => {
    setFilter({ category: value });
  };

  if (loading) return <Spin size="large" />;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          <Col span={12}>
            <Search
              placeholder="搜索商品"
              onSearch={handleSearch}
              enterButton
            />
          </Col>
          <Col span={12}>
            <Select
              style={{ width: '100%' }}
              placeholder="選擇分類"
              onChange={handleFilterChange}
            >
              <Select.Option value="all">全部</Select.Option>
              <Select.Option value="electronics">電子產品</Select.Option>
              <Select.Option value="clothing">服飾</Select.Option>
            </Select>
          </Col>
        </Row>
      </div>

      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
