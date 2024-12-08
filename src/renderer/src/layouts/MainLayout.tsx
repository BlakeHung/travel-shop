import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  OrderedListOutlined,
} from '@ant-design/icons';

const { Header, Content } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: '首頁',
    },
    {
      key: '/products',
      icon: <ShoppingOutlined />,
      label: '商品列表',
    },
    {
      key: '/cart',
      icon: <ShoppingCartOutlined />,
      label: '購物車',
    },
    {
      key: '/orders',
      icon: <OrderedListOutlined />,
      label: '訂單',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ padding: 0 }}>
        <div style={{ 
          float: 'left', 
          color: 'white', 
          marginLeft: '20px',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
          旅行商店
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          onClick={({ key }) => navigate(key)}
          style={{ justifyContent: 'flex-end' }}
        />
      </Header>
      <Content style={{ padding: '24px', background: '#fff' }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
