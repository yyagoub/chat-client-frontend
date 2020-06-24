import React from 'react';
import { Layout } from 'antd';
import Sider from './Sider';
import Conversation from './Conversation';

const Chat = () => (
  <Layout.Content style={{ padding: '0 50px' }}>
    <Layout className='site-layout-background' style={{ padding: '24px 0' }}>
      <Sider />
      <Conversation />
    </Layout>
  </Layout.Content>
);

export default Chat;
