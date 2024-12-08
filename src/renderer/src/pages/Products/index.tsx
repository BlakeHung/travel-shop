import { useState } from 'react';
import { Card, Row, Col, Input } from 'antd';

const { Search } = Input;

const Products = () => {
  const [searchText, setSearchText] = useState('');

  const onSearch = (value: string) => {
    setSearchText(value);
    // TODO: 實現搜索邏輯
  };

  return (
    <div style={{ padding: '24px' }}>
      <Search
        placeholder="搜索商品"
        onSearch={onSearch}
        style={{ marginBottom: 24 }}
      />
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card title="商品示例" hoverable>
            <p>商品描述</p>
            <p>價格: $XXX</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Products;
