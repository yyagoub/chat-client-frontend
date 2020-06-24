import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const FindFriendForm = () => (
  <Input.Search
    placeholder='input username'
    enterButton='Add'
    size='large'
    onSearch={(value) => console.log(value)}
  />
);

export default FindFriendForm;
