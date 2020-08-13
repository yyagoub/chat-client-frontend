import React from 'react';

import { Layout, Row, Col } from 'antd';
import Conversation from './Conversation';
import MessageInput from './MessageInput';

const Chat = (props) => (
  <Layout.Content style={{ padding: '0 50px' }}>
    <Layout className='site-layout-background' style={{ padding: '24px 0' }}>
      <Row>
        <Col span={24}>
          <Conversation {...props} />
        </Col>
        <Col span={24}>
          <MessageInput {...props} />
        </Col>
      </Row>
    </Layout>
  </Layout.Content>
);

export default Chat;
