console.log('Hello, loading app ...');

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './containers/app.jsx';
import allReducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  $('#root')[0]
);
