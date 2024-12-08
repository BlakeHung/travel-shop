import { Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Title } = Typography;

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
}

const Orders = () => {
  const columns: ColumnsType<Order> = [
    {
      title: '訂單編號',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '狀態',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === '已完成' ? 'green' : 'blue'}>
          {status}
        </Tag>
      ),
    },
    {
      title: '總金額',
      dataIndex: 'total',
      key: 'total',
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>訂單記錄</Title>
      <Table columns={columns} dataSource={[]} />
    </div>
  );
};

export default Orders;
