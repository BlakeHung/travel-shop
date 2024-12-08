import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import type { RegisterForm } from '../../types/user';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values: RegisterForm) => {
    try {
      // TODO: 這裡將替換為實際的 API 調用
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('註冊失敗');

      message.success('註冊成功，請登入');
      navigate('/login');
    } catch (error) {
      message.error('註冊失敗，請稍後再試');
    }
  };

  return (
    <div style={{ 
      maxWidth: 400, 
      margin: '100px auto',
      padding: '0 24px'
    }}>
      <Card title="註冊" bordered={false}>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '請輸入用戶名' }]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="用戶名" 
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: '請輸入電子郵件' },
              { type: 'email', message: '請輸入有效的電子郵件' }
            ]}
          >
            <Input 
              prefix={<MailOutlined />} 
              placeholder="電子郵件" 
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: '請輸入密碼' },
              { min: 6, message: '密碼長度至少為 6 位' }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="密碼"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: '請確認密碼' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('兩次輸入的密碼不一致'));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="確認密碼"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              註冊
            </Button>
          </Form.Item>

          <div style={{ textAlign: 'center' }}>
            已有帳號？ <Link to="/login">立即登入</Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Register; 