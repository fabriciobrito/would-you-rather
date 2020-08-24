import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import middleware from './middleware';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
