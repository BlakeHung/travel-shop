export interface ChatMessage {
  id: string;
  orderId: string;
  userId: string;
  username: string;
  content: string;
  timestamp: string;
}

export interface ChatRoom {
  id: string;
  orderId: string;
  name: string;
  participants: string[];
  messages: ChatMessage[];
  createdAt: string;
}

export interface ChatUser {
  id: string;
  username: string;
  avatar?: string;
}

export interface Order {
  id: string;
  productId: string;
  chatRoomId: string;
  participants: string[];
  status: 'active' | 'completed';
  departureDate: string;
  createdAt: string;
}
