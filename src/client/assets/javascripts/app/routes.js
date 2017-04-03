import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import App from './App';
import ComingSoon from 'features/ComingSoon';
import NotFoundView from 'components/NotFound';
import Beta from 'features/Beta';

export default (
  <Switch>
    <Route exact path="/" component={ComingSoon} />
    <Route path='/beta' component={Beta} />
    <Route path="/404" component={NotFoundView} />
    <Redirect from="*" to="/404" />
  </Switch>
);
