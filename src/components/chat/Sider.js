import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { history } from '../../util/routes/history';

const friendsItems = (friends) => {
  if (!friends) return;
  return friends.map(({ username }, i) =>
    username ? <Menu.Item key={i}>{username}</Menu.Item> : null
  );
};

const Sider = ({ friends }) => (
  <Layout.Sider className='site-layout-background' width={200}>
    <Menu
      mode='inline'
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%' }}
    >
      <Button
        type='link'
        block
        onClick={() => {
          history.push('/find-friend');
        }}
      >
        Find a friend!
      </Button>
      {friendsItems(friends)}
    </Menu>
  </Layout.Sider>
);

export default Sider;
