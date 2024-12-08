import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div style={{ display: 'flex', padding: '12px 24px' }}>
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onPressEnter={handleSend}
        placeholder="輸入訊息..."
        style={{ marginRight: 8 }}
      />
      <Button
        type="primary"
        icon={<SendOutlined />}
        onClick={handleSend}
      >
        發送
      </Button>
    </div>
  );
};

export default ChatInput;
