import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';

import WeekPage from './pages/WeekPage/WeekPage.jsx';

const grandTotal = 4500;

ReactDOM.render(
  <Provider store={store}>
    <WeekPage grandTotal={grandTotal}/>
  </Provider>, document.getElementById('app'));
