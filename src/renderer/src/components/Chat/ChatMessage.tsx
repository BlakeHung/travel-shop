import React from 'react';
import { Typography } from 'antd';
import type { ChatMessage as ChatMessageType } from '../../types/chat';

const { Text } = Typography;

interface ChatMessageProps {
  message: ChatMessageType;
  isMine: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isMine }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isMine ? 'flex-end' : 'flex-start',
        marginBottom: 16,
      }}
    >
      <div
        style={{
          maxWidth: '70%',
          padding: '8px 12px',
          borderRadius: 8,
          backgroundColor: isMine ? '#1890ff' : '#f0f0f0',
          color: isMine ? 'white' : 'black',
        }}
      >
        <div style={{ marginBottom: 4 }}>
          <Text strong style={{ color: isMine ? 'white' : 'rgba(0, 0, 0, 0.85)' }}>
            {message.username}
          </Text>
        </div>
        <div>{message.content}</div>
        <div style={{ fontSize: '12px', marginTop: 4, opacity: 0.7 }}>
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
