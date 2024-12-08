import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Image, Typography, Button, Descriptions, Spin, message } from 'antd';
import { ShoppingCartOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useProductStore } from '../../stores/useProductStore';
import { useCartStore } from '../../stores/useCartStore';
import { productAPI } from '../../api/products';

const { Title, Text } = Typography;

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  const addToCart = useCartStore(state => state.addToCart);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productAPI.getProduct(id!);
        setProduct(data);
      } catch (error) {
        message.error('獲取商品詳情失敗');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
    message.success('已加入購物車');
  };

  if (loading) return <Spin size="large" />;
  if (!product) return <div>商品不存在</div>;

  return (
    <div style={{ padding: 24 }}>
      <Button 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate(-1)}
        style={{ marginBottom: 16 }}
      >
        返回
      </Button>

      <Card>
        <div style={{ display: 'flex', gap: 24 }}>
          <div style={{ flex: '0 0 400px' }}>
            <Image
              src={product.image}
              alt={product.name}
              style={{ width: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <Title level={2}>{product.name}</Title>
            <Title level={3} type="danger">
              ${product.price}
            </Title>

            <Descriptions column={1}>
              <Descriptions.Item label="商品分類">
                {product.category}
              </Descriptions.Item>
              <Descriptions.Item label="庫存數量">
                {product.stock}
              </Descriptions.Item>
              <Descriptions.Item label="商品描述">
                {product.description}
              </Descriptions.Item>
            </Descriptions>

            <Button
              type="primary"
              size="large"
              icon={<ShoppingCartOutlined />}
              onClick={handleAddToCart}
              style={{ marginTop: 24 }}
            >
              加入購物車
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetail;
