import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';

import WeekPage from './pages/week/Page.jsx';

const grandTotal = 4500;

  const accounts = [
    {code: "P1", label: "Project #1"},
    {code: "P2", label: "Project #2"},
    {code: "h", label: "Holiday"},
    {code: "P", label: "PTO"},
    {code: "T", label: "Training"}
  ];

ReactDOM.render(
  <Provider store={store}>
    <WeekPage initialAccounts={accounts} grandTotal={grandTotal}/>
  </Provider>, document.getElementById('app'));
