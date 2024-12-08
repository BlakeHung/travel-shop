import { Card, Button, Image, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useCartStore } from '../../stores/useCartStore';

const { Meta } = Card;
const { Text } = Typography;

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard = ({ id, name, price, image, description }: ProductCardProps) => {
  const addToCart = useCartStore(state => state.addToCart);

  return (
    <Card
      hoverable
      cover={<Image alt={name} src={image} />}
      actions={[
        <Button 
          type="primary" 
          icon={<ShoppingCartOutlined />}
          onClick={() => addToCart({ id, name, price, quantity: 1 })}
        >
          加入購物車
        </Button>
      ]}
    >
      <Meta title={name} description={description} />
      <Text strong style={{ fontSize: '18px', marginTop: '10px' }}>
        ${price}
      </Text>
    </Card>
  );
};

export default ProductCard; 