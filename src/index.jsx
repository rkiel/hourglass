import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';

import Hourglass from './Hourglass.jsx';

import Calendar from './util/Calendar';

const nowWeek = Calendar.nowWeek();

const cells = _.map(nowWeek, mDate => ({mDate, hours: (mDate.date()*100)}));

const rows = [
  {code: "P1", label: "Project #1", cells, weeklyTotal: 4000},
  {code: "h", label: "Holiday", cells, weeklyTotal: 0},
  {code: "P", label: "PTO", cells, weeklyTotal: 0},
  {code: "T", label: "Training", cells, weeklyTotal: 0}
];

const week = _.map(nowWeek, mDate => ({mDate, dailyTotal: 800}));

const grandTotal = 4500;


ReactDOM.render(
  <Provider store={store}>
    <Hourglass cellRows={rows} grandTotal={grandTotal}/>
  </Provider>, document.getElementById('app'));
