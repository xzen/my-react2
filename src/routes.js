import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './components/home';
import Caddy from './components/caddy';

const Routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/caddy" component={Caddy} exact />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
