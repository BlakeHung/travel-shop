import React from 'react'
import { Card, Row, Col, List, Tag, Typography } from 'antd'
import {
  ShoppingOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  DollarOutlined
} from '@ant-design/icons'

const { Title } = Typography

// 模擬的旅遊產品數據
const travelProducts = [
  {
    id: 1,
    title: '日本東京自由行 5 天 4 夜',
    price: 35000,
    location: '東京',
    date: '2024-04-01',
    tags: ['熱門', '自由行']
  },
  {
    id: 2,
    title: '韓國首爾深度遊 4 天 3 夜',
    price: 28000,
    location: '首爾',
    date: '2024-04-15',
    tags: ['跟團', '美食']
  },
  {
    id: 3,
    title: '泰國曼谷芭達雅 6 天 5 夜',
    price: 32000,
    location: '曼谷',
    date: '2024-05-01',
    tags: ['海灘', '購物']
  },
  {
    id: 4,
    title: '新加坡環球影城之旅 4 天 3 夜',
    price: 30000,
    location: '新加坡',
    date: '2024-05-15',
    tags: ['主題樂園', '家庭']
  }
]

const Home: React.FC = () => {
  return (
    <div>
      <Title level={2}>熱門旅遊行程</Title>
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={travelProducts}
        renderItem={item => (
          <List.Item>
            <Card
              hoverable
              cover={
                <img
                  alt={item.title}
                  src={`https://picsum.photos/400/200?random=${item.id}`}
                  style={{ height: 200, objectFit: 'cover' }}
                />
              }
            >
              <Card.Meta
                title={item.title}
                description={
                  <>
                    <p>
                      <EnvironmentOutlined /> {item.location}
                      <br />
                      <CalendarOutlined /> {item.date}
                      <br />
                      <DollarOutlined /> NT$ {item.price.toLocaleString()}
                    </p>
                    <div>
                      {item.tags.map(tag => (
                        <Tag key={tag} color="blue">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </>
                }
              />
            </Card>
          </List.Item>
        )}
      />

      <Title level={2} style={{ marginTop: 24 }}>推薦景點</Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt="台北101" src="https://picsum.photos/300/200?random=5" />}
          >
            <Card.Meta title="台北101" description="台灣地標性建築" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt="日月潭" src="https://picsum.photos/300/200?random=6" />}
          >
            <Card.Meta title="日月潭" description="台灣最美湖泊" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt="墾丁海灘" src="https://picsum.photos/300/200?random=7" />}
          >
            <Card.Meta title="墾丁海灘" description="陽光沙灘的度假勝地" />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Home
