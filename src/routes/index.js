import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Encomendas from '../pages/Deliveries/List';
import CreateDelivery from '../pages/Deliveries/Create';

import Entregadores from '../pages/Deliverymen/List';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/deliveries" component={Encomendas} isPrivate></Route>
      <Route
        path="/create-delivery"
        component={CreateDelivery}
        isPrivate
      ></Route>
      <Route
        path="/edit-delivery/:delivery"
        component={CreateDelivery}
        isPrivate
      ></Route>

      <Route path="/deliverymen" component={Entregadores} isPrivate></Route>
    </Switch>
  );
}
