import { Card, Button, InputNumber, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useCartStore } from '../../stores/useCartStore';

const { Text } = Typography;

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const CartItem = ({ id, name, price, quantity }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCartStore();

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text strong>{name}</Text>
        <Text>${price}</Text>
        <InputNumber
          min={1}
          value={quantity}
          onChange={(value) => updateQuantity(id, value || 1)}
        />
        <Button 
          type="text" 
          danger 
          icon={<DeleteOutlined />}
          onClick={() => removeFromCart(id)}
        />
      </div>
    </Card>
  );
};

export default CartItem; 