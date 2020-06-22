import React from 'react';

import Layout from './components/layout/Layout';
import RoutesPublic from './util/routes/RoutesPublic';
import RoutesPrivate from './util/routes/RoutesPrivate';

import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.UserModel);
  return (
    <Layout>{user.loggedIn ? <RoutesPrivate /> : <RoutesPublic />}</Layout>
  );
}

export default App;
