import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';

import Hourglass from './Hourglass.jsx';

const grandTotal = 4500;

ReactDOM.render(
  <Provider store={store}>
    <Hourglass grandTotal={grandTotal}/>
  </Provider>, document.getElementById('app'));
