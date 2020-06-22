import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
//import HorizontalLoginForm from '../login/HorizontalLoginForm';

const Header = () => (
  <Layout.Header className='header'>
    <div className='logo' />
    <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
      <Menu.Item key='1'>Chat App</Menu.Item>
    </Menu>
  </Layout.Header>
);

/*
const Header = () => (
  <Layout.Header className='header'>
    <div className='logo' />
    <Row justify='end'>
      <Col span={8}>
        <HorizontalLoginForm />
      </Col>
    </Row>
  </Layout.Header>
);
*/

export default Header;
