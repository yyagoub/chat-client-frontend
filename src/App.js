import React from 'react';
import { Router } from 'react-router-dom';
import { history } from './util/routes/history';

import Layout from './components/layout/Layout';
import RoutesPublic from './util/routes/RoutesPublic';
import RoutesPrivate from './util/routes/RoutesPrivate';

import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.UserModel);
  return (
    <Router history={history}>
      <Layout>{user.loggedIn ? <RoutesPrivate /> : <RoutesPublic />}</Layout>
    </Router>
  );
}

export default App;
