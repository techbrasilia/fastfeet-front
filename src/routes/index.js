import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Encomendas from '../pages/Encomendas';
import Entregadores from '../pages/Entregadores';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/encomendas" component={Encomendas} isPrivate></Route>
      <Route path="/entregadores" component={Entregadores} isPrivate></Route>
    </Switch>
  );
}
