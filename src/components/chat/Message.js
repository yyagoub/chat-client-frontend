import React from 'react';
import 'antd/dist/antd.css';
import { Divider, Typography } from 'antd';

const Message = ({ username, context }) => (
  <>
    <Divider orientation={username ? 'left' : 'right'}>
      {username || 'me'}
    </Divider>
    <Typography.Text code>{context || ' '}</Typography.Text>
  </>
);

export default Message;
