import { Table, Button, InputNumber, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Title } = Typography;

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const columns: ColumnsType<CartItem> = [
    {
      title: '商品名稱',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '單價',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '數量',
      key: 'quantity',
      render: (_, record) => (
        <InputNumber
          min={1}
          defaultValue={record.quantity}
          onChange={(value) => {
            // TODO: 更新購物車數量
          }}
        />
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Button type="link" danger>
          刪除
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>購物車</Title>
      <Table columns={columns} dataSource={[]} />
      <div style={{ textAlign: 'right', marginTop: 24 }}>
        <Button type="primary" size="large">
          結帳
        </Button>
      </div>
    </div>
  );
};

export default Cart;
