// @flow

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import Helmet from 'react-helmet';

import routes from './routes';
import { SENTRY_URL } from './config';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

window.Raven && Raven.config(SENTRY_URL).install();

const HelmetSettings = {
  link: [
    { rel: "stylesheets", href: "//fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700" }
  ]
};

const Root = ({ store, history }) => {
  let ComponentEl = (
    <Provider store={store}>
      <div>
        <Helmet {...HelmetSettings} />
        <Router history={history} routes={routes} />
      </div>
    </Provider>
  );

  if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('./DevTools').default;

    ComponentEl = (
      <Provider store={store}>
        <div>
          <Helmet {...HelmetSettings} />
          <Router history={history} routes={routes} />
          {!window.devToolsExtension ? <DevTools /> : null}
        </div>
      </Provider>
    );
  }

  return ComponentEl;
};

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
