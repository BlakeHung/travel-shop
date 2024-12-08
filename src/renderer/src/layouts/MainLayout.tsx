import React from 'react'
import { Layout, Menu } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import {
  HomeOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  OrderedListOutlined,
  MessageOutlined
} from '@ant-design/icons'

const { Header, Content } = Layout

const MainLayout: React.FC = () => {
  const navigate = useNavigate()

  const menuItems = [
    { key: '/', icon: <HomeOutlined />, label: '首頁' },
    { key: '/products', icon: <ShoppingOutlined />, label: '商品' },
    { key: '/cart', icon: <ShoppingCartOutlined />, label: '購物車' },
    { key: '/orders', icon: <OrderedListOutlined />, label: '訂單' },
    { key: '/chat', icon: <MessageOutlined />, label: '聊天' }
  ]

  return (
    <Layout>
      <Header style={{ padding: 0, background: '#fff' }}>
        <Menu
          mode="horizontal"
          items={menuItems}
          onClick={({ key }) => navigate(key)}
          style={{ justifyContent: 'center' }}
        />
      </Header>
      <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)' }}>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default MainLayout
