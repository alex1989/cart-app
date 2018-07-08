import * as React from 'react';
import { History } from 'history';
import {Redirect, Route, Switch} from 'react-router';
import { ConnectedRouter } from 'connected-react-router'
import { CartApp } from 'app/containers/cart';
import { Shipping } from 'app/containers/shipping';
// import { hot } from 'react-hot-loader';

interface HistoryProps {
    history: History,
}

export const App: React.SFC<HistoryProps> = ({ history }: HistoryProps) => (
  <ConnectedRouter history={ history }>
    <Switch>
      <Route path="/shipping" component={Shipping} />
      <Route path="/cart" component={CartApp} />
      <Redirect to="/cart"/>
    </Switch>
  </ConnectedRouter>
);
