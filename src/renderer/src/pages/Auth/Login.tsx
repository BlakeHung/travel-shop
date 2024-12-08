import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: { email: string; password: string }) => {
    // 預設帳密
    if (values.email === 'admin@example.com' && values.password === 'password123') {
      message.success('登入成功');
      navigate('/');
    } else {
      message.error('帳號或密碼錯誤');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', padding: '0 20px' }}>
      <Card title="登入">
        <Form onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: '請輸入電子郵件' }]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="admin@example.com" 
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '請輸入密碼' }]}
          >
            <Input.Password 
              prefix={<LockOutlined />} 
              placeholder="password123" 
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登入
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login; 