import React from 'react';
import { Card, Button, message } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../stores/useCartStore';
import type { Product } from '../../types/product';

const { Meta } = Card;

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
    message.success('已加入購物車');
  };

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Card
      hoverable
      style={{ cursor: 'pointer' }}
      cover={
        <img 
          alt={product.name} 
          src={product.image} 
          style={{ height: 200, objectFit: 'cover' }}
        />
      }
      onClick={handleCardClick}
      actions={[
        <Button 
          type="primary" 
          icon={<ShoppingCartOutlined />}
          onClick={handleAddToCart}
        >
          加入購物車
        </Button>
      ]}
    >
      <Meta
        title={
          <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
            {product.name}
          </div>
        }
        description={
          <>
            <div style={{ height: '40px', overflow: 'hidden' }}>
              {product.description}
            </div>
            <div style={{ 
              color: '#f50', 
              fontSize: '20px', 
              marginTop: '10px',
              fontWeight: 'bold' 
            }}>
              ${product.price}
            </div>
          </>
        }
      />
    </Card>
  );
};

export default ProductCard; 