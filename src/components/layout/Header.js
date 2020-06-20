import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import HorizontalLoginForm from '../login/HorizontalLoginForm';

const Header = () => (
  <Layout.Header className='header'>
    <div className='logo' />
    <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
      <Menu.Item key='1'>nav 1</Menu.Item>
      <Menu.Item key='2'>nav 2</Menu.Item>
      <Menu.Item key='3'>
        <HorizontalLoginForm />
      </Menu.Item>
    </Menu>
  </Layout.Header>
);

export default Header;
