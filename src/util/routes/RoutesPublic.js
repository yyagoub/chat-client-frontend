import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SigninView from '../../views/index/SigninView';
import SignupView from '../../views/index/SignupView';

export const routes = [
  {
    path: '/',
    name: 'Signin',
    component: SigninView,
    defualtRoute: true,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupView,
  },
];

const getRoutes = () => {
  return routes.map((route, index) => {
    return (
      <Route path={route.path} component={route.component} exact key={index} />
    );
  });
};

export default function RoutesPublic() {
  return (
    <Switch>
      {getRoutes(routes)}
      <Redirect from='*' to='/' />
    </Switch>
  );
}
