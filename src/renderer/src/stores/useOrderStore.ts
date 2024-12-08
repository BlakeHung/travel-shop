import { create } from 'zustand';

interface Order {
  id: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
}

interface OrderStore {
  orders: Order[];
  createOrder: (items: Order['items'], total: number) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  orders: [],

  createOrder: (items, total) =>
    set((state) => ({
      orders: [
        ...state.orders,
        {
          id: `ORD-${Date.now()}`,
          items,
          total,
          status: 'pending',
          date: new Date().toISOString(),
        },
      ],
    })),

  updateOrderStatus: (orderId, status) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === orderId ? { ...order, status } : order
      ),
    })),
}));
