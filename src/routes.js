import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ProductsList from './components/products-list';

const Routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ProductsList} exact />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
