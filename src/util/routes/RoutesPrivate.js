import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import ChatView from '../../views/chat/ChatView';
import SearchFriendView from '../../views/searchFriend/SearchFriendView';

export const routes = [
  {
    path: '/chat',
    name: 'Chat',
    component: ChatView,
    defualtRoute: true,
  },
  {
    path: '/find-friend',
    name: 'Find a friend!',
    component: SearchFriendView,
  },
];

const getRoutes = () => {
  return routes.map((route, index) => {
    return (
      <Route path={route.path} component={route.component} exact key={index} />
    );
  });
};

export default function RoutesPrivate() {
  return (
    <Switch>
      {getRoutes(routes)}
      <Redirect from='*' to='/chat' />
    </Switch>
  );
}
