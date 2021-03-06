import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import ComingSoon from 'features/ComingSoon';
import NotFoundView from 'components/NotFound';
import Landing from 'features/Landing';

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path='/legacy' component={ComingSoon} />
    <Route path="/404" component={NotFoundView} />
    <Redirect from="*" to="/404" />
  </Switch>
);
