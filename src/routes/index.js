import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Encomendas from '../pages/Deliveries/List';
import CreateDelivery from '../pages/Deliveries/Create';

import Entregadores from '../pages/Deliverymen/List';
import CreateDeliveryman from '../pages/Deliverymen/Create';

import Destinatarios from '../pages/Recipients/List';
import CreateRecipient from '../pages/Recipients/Create';

import Problemas from '../pages/Problems/List';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/deliveries" component={Encomendas} isPrivate></Route>
      <Route path="/deliverymen" component={Entregadores} isPrivate></Route>
      <Route path="/recipients" component={Destinatarios} isPrivate></Route>
      <Route path="/problems" component={Problemas} isPrivate></Route>

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

      <Route
        path="/create-deliveryman"
        component={CreateDeliveryman}
        isPrivate
      ></Route>
      <Route
        path="/edit-deliveryman/:deliveryman"
        component={CreateDeliveryman}
        isPrivate
      ></Route>

      <Route
        path="/create-recipient"
        component={CreateRecipient}
        isPrivate
      ></Route>
      <Route
        path="/edit-recipient/:recipient"
        component={CreateRecipient}
        isPrivate
      ></Route>
    </Switch>
  );
}
