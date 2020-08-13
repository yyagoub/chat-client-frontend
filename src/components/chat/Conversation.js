import React from 'react';
import { Layout } from 'antd';
import Message from './Message';

const createMessages = (messages) => {
  if (
    messages === undefined ||
    messages === null ||
    !(messages instanceof Array)
  ) {
    return;
  }
  return messages.map((message, index) => <Message {...message} key={index} />);
};

const Conversation = ({ messages }) => (
  <Layout.Content style={{ padding: '0 24px', minHeight: 280 }}>
    {createMessages(messages)}
  </Layout.Content>
);

export default Conversation;
