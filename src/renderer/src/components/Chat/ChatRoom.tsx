import React, { useEffect, useState, useRef } from 'react';
import { Card, List, Typography, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { chatAPI, mockUsers } from '../../mock/chat';
import type { ChatMessage as ChatMessageType } from '../../types/chat';

const { Title } = Typography;

const ChatRoom: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchMessages = async () => {
      if (!roomId) return;
      try {
        const data = await chatAPI.getChatMessages(roomId);
        setMessages(data);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [roomId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!roomId || !content.trim()) return;
    
    const currentUser = mockUsers.find(u => u.id === 'user1');
    
    try {
      const newMessage = await chatAPI.sendMessage(roomId, {
        orderId: roomId,
        userId: currentUser?.id || 'user1',
        username: currentUser?.username || '旅客A',
        content: content.trim(),
      });
      setMessages(prev => [...prev, newMessage]);
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  if (loading) return <Spin size="large" />;

  return (
    <Card style={{ height: '80vh', display: 'flex', flexDirection: 'column' }}>
      <Title level={3}>聊天室</Title>
      <List
        style={{
          flex: 1,
          overflow: 'auto',
          padding: '0 24px',
        }}
        dataSource={messages}
        renderItem={(message) => (
          <ChatMessage
            message={message}
            isMine={message.userId === 'user1'} // 暫時固定用戶
          />
        )}
      />
      <div ref={messagesEndRef} />
      <ChatInput onSend={handleSendMessage} />
    </Card>
  );
};

export default ChatRoom;
