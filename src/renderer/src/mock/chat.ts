import { ChatRoom, ChatMessage, ChatUser, Order } from '../types/chat';

// 模擬用戶數據
export const mockUsers: ChatUser[] = [
  { id: 'user1', username: '旅客A' },
  { id: 'user2', username: '旅客B' },
  { id: 'user3', username: '旅客C' },
  { id: 'user4', username: '旅客D' },
];

// 生成隨機消息
const generateMessages = (orderId: string, users: ChatUser[]): ChatMessage[] => {
  const messages: ChatMessage[] = [];
  const messageContents = [
    '大家好！一起去玩吧！',
    '這個行程看起來很棒呢',
    '請問有人知道天氣如何嗎？',
    '我們可以約在哪裡集合？',
    '有人需要拼車嗎？',
  ];

  for (let i = 0; i < 5; i++) {
    const user = users[Math.floor(Math.random() * users.length)];
    messages.push({
      id: `msg-${orderId}-${i}`,
      orderId,
      userId: user.id,
      username: user.username,
      content: messageContents[i],
      timestamp: new Date(Date.now() - i * 60000).toISOString(),
    });
  }

  return messages;
};

// 模擬聊天室數據
export const mockChatRooms: ChatRoom[] = [
  {
    id: 'room1',
    orderId: 'order1',
    name: '東京自由行群組',
    participants: ['user1', 'user2', 'user3'],
    messages: generateMessages('order1', mockUsers.slice(0, 3)),
    createdAt: '2024-03-10T00:00:00.000Z',
  },
  {
    id: 'room2',
    orderId: 'order2',
    name: '首爾深度遊群組',
    participants: ['user2', 'user3', 'user4'],
    messages: generateMessages('order2', mockUsers.slice(1, 4)),
    createdAt: '2024-03-11T00:00:00.000Z',
  },
  {
    id: 'room3',
    orderId: 'order3',
    name: '曼谷美食團群組',
    participants: ['user1', 'user3', 'user4'],
    messages: generateMessages('order3', mockUsers.slice(0, 3)),
    createdAt: '2024-03-12T00:00:00.000Z',
  },
];

// 模擬訂單數據
export const mockOrders: Order[] = [
  {
    id: 'order1',
    productId: '1',
    chatRoomId: 'room1',
    participants: ['user1', 'user2', 'user3'],
    status: 'active',
    departureDate: '2024-04-01T00:00:00.000Z',
    createdAt: '2024-03-10T00:00:00.000Z',
  },
  {
    id: 'order2',
    productId: '2',
    chatRoomId: 'room2',
    participants: ['user2', 'user3', 'user4'],
    status: 'active',
    departureDate: '2024-04-15T00:00:00.000Z',
    createdAt: '2024-03-11T00:00:00.000Z',
  },
  {
    id: 'order3',
    productId: '3',
    chatRoomId: 'room3',
    participants: ['user1', 'user3', 'user4'],
    status: 'active',
    departureDate: '2024-05-01T00:00:00.000Z',
    createdAt: '2024-03-12T00:00:00.000Z',
  },
];

// 模擬 API 延遲
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// 模擬聊天 API
export const chatAPI = {
  // 獲取聊天室列表
  getChatRooms: async (userId: string) => {
    await delay(500);
    return mockChatRooms.filter(room => room.participants.includes(userId));
  },

  // 獲取聊天室消息
  getChatMessages: async (roomId: string) => {
    await delay(300);
    const room = mockChatRooms.find(r => r.id === roomId);
    return room?.messages || [];
  },

  // 發送消息
  sendMessage: async (roomId: string, message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    await delay(200);
    const newMessage = {
      ...message,
      id: `msg-${Date.now()}`,
      timestamp: new Date().toISOString(),
    };
    const room = mockChatRooms.find(r => r.id === roomId);
    if (room) {
      room.messages.push(newMessage);
    }
    return newMessage;
  },
};
