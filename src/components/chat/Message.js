import React from 'react';
import 'antd/dist/antd.css';
import { Divider } from 'antd';

const Message = ({ owner, username, message }) => {
  const orientation = owner === 'me' ? 'left' : 'right';
  return (
    <>
      <Divider orientation={orientation} plain>
        {username}
      </Divider>
      <p>{message}</p>
    </>
  );
};

export default Message;
