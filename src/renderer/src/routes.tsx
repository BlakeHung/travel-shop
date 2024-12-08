import { lazy } from 'react';
import MainLayout from './layouts/MainLayout';
import PrivateRoute from './components/Auth/PrivateRoute';

const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Orders = lazy(() => import('./pages/Orders'));
const Chat = lazy(() => import('./pages/Chat'));
const ChatRoom = lazy(() => import('./components/Chat/ChatRoom'));

export const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <ProductDetail />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'chat',
        element: <Chat />,
      },
      {
        path: 'chat/:roomId',
        element: <ChatRoom />,
      },
    ],
  },
];
