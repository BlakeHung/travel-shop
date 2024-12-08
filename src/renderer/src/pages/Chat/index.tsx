import React, { useEffect, useState } from 'react';
import { Layout, List, Card, Typography, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { chatAPI, mockUsers } from '../../mock/chat';
import type { ChatRoom } from '../../types/chat';

const { Content } = Layout;
const { Title } = Typography;

const ChatPage: React.FC = () => {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState('user1');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const rooms = await chatAPI.getChatRooms(currentUserId);
        setChatRooms(rooms);
      } catch (error) {
        console.error('Failed to fetch chat rooms:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChatRooms();
  }, [currentUserId]);

  return (
    <Content style={{ padding: '24px' }}>
      <div style={{ marginBottom: 24 }}>
        <Title level={2} style={{ marginBottom: 16 }}>聊天室</Title>
        <Select
          value={currentUserId}
          onChange={setCurrentUserId}
          style={{ width: 200, marginBottom: 16 }}
        >
          {mockUsers.map(user => (
            <Select.Option key={user.id} value={user.id}>
              {user.username}
            </Select.Option>
          ))}
        </Select>
      </div>
      
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={chatRooms}
        loading={loading}
        renderItem={(room) => (
          <List.Item>
            <Card
              title={room.name}
              hoverable
              onClick={() => navigate(`/chat/${room.id}`)}
            >
              <p>參與人數: {room.participants.length}</p>
              <p>
                最新消息:{' '}
                {room.messages[room.messages.length - 1]?.content || '暫無消息'}
              </p>
              <p>
                參與者:{' '}
                {room.participants
                  .map(pid => mockUsers.find(u => u.id === pid)?.username)
                  .join(', ')}
              </p>
            </Card>
          </List.Item>
        )}
      />
    </Content>
  );
};

export default ChatPage;
