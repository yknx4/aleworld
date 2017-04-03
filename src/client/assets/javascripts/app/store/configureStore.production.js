import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { syncHistoryWithStore} from 'react-router-redux';

import rootReducer from '../reducer';
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const routerMiddle = routerMiddleware(history);

const enhancer = compose(
  applyMiddleware(promiseMiddleware, routerMiddle)
)(createStore);

export default function configureStore(initialState) {
  const store = enhancer(rootReducer, initialState);
  syncHistoryWithStore(history, store);
  return store;
}
