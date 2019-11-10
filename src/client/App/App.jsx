import React from 'react';
import {
  Router, Route, Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Main from './components/Main';
import {
  GlobalStyle
} from './styledComponents';

export const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <GlobalStyle />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/:city" component={Main} />
    </Switch>
  </Router>
);

export default App;
