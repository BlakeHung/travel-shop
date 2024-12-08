import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Spin } from 'antd';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  const element = useRoutes(routes);

  return (
    <Suspense 
      fallback={
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' 
        }}>
          <Spin size="large" />
        </div>
      }
    >
      {element}
    </Suspense>
  );
}

const WrappedApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default WrappedApp;
