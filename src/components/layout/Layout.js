import React from 'react';
//import { Layout as antdLayout } from 'antd';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);

export default Layout;
