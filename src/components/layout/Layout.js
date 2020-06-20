import React from 'react';
import { Layout as antdLayout } from 'antd';
import Footer from './Footer';
import Header from './Header';
import 'antd/dist/antd.css';

const Layout = (props) => (
  <>
    <Header />
    <antdLayout.Content style={{ padding: '50px 50px' }}>
      {props.children}
    </antdLayout.Content>
    <Footer />
  </>
);

export default Layout;
