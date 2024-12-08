import { Typography, Card } from 'antd';

const { Title } = Typography;

const Home = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>歡迎來到旅行商店</Title>
      <Card>
        <p>這裡是首頁內容</p>
      </Card>
    </div>
  );
};

export default Home;
