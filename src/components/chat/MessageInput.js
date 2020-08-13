import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, Row, Col } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

const MessageInput = ({ message, setMessage, sendMessage }) => (
  <>
    <Row>
      <Col span={23}>
        <Input
          placeholder='say hello'
          bordered={false}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
        />
      </Col>
      <Col span={1}>
        <Button
          type='primary'
          icon={<MessageOutlined />}
          onClick={(e) => {
            sendMessage(e);
          }}
        />
      </Col>
    </Row>
  </>
);

export default MessageInput;
