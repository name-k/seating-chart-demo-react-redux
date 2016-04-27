import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from 'reducers';
import App from './app';

// const createStoreWithMiddleware = applyMiddleware()(createStore);
let store = createStore(reducers, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('[data-app-container]'));