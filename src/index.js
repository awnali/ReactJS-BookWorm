import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {userLoggedIn} from './redux/actions/auth'
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import rootReducer from './redux/rootReducer';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

if (localStorage.bookwormToken) {
  const user = { token: localStorage.bookwormToken };
  store.dispatch(userLoggedIn(user));
}
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
