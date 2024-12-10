import React, { useEffect, useState } from 'react';
import { Row, Col, Input, Select, Spin } from 'antd';
import { useProductStore } from '../../stores/useProductStore';
import ProductCard from '../ProductCard';
import { categories } from '../../mock/products';

const { Search } = Input;

const ProductList: React.FC = () => {
  const { 
    products, 
    loading, 
    error, 
    searchProducts, 
    setFilter,
    initializeStore,
    filter
  } = useProductStore();

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    initializeStore();
  }, []);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    searchProducts(value);
  };

  const handleFilterChange = (value: string) => {
    if (value === 'all') {
      setFilter({});
    } else {
      setFilter({ category: value });
    }
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
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              enterButton
            />
          </Col>
          <Col span={12}>
            <Select
              style={{ width: '100%' }}
              placeholder="選擇分類"
              onChange={handleFilterChange}
              value={filter.category || 'all'}
            >
              <Select.Option value="all">全部</Select.Option>
              {categories.map(category => (
                <Select.Option key={category.value} value={category.value}>
                  {category.label}
                </Select.Option>
              ))}
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
