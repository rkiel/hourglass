import React from 'react';
import ReactDOM from 'react-dom';

import Hourglass from './Hourglass.jsx';

const rows = [
  {code: "P1", label: "Project #1", weeklyTotal: 4000},
  {code: "H", label: "Holiday", weeklyTotal: 0},
  {code: "P", label: "PTO", weeklyTotal: 0},
  {code: "T", label: "Training", weeklyTotal: 0}
];

const week = [
  {label: 'Sunday', month: 2, day: 7, year: 2017, dailyTotal: 0},
  {label: 'Monday', month: 2, day: 8, year: 2017, dailyTotal: 800},
  {label: 'Tuesday', month: 2, day: 9, year: 2017, dailyTotal: 800},
  {label: 'Wednesday', month: 2, day: 10, year: 2017, dailyTotal: 800},
  {label: 'Thursday', month: 2, day: 11, year: 2017, dailyTotal: 800},
  {label: 'Friday', month: 2, day: 12, year: 2017, dailyTotal: 800},
  {label: 'Saturday', month: 2, day: 13, year: 2017, dailyTotal: 0}
];

const grandTotal = 4500;


ReactDOM.render(
  <Hourglass cellRows={rows} week={week} grandTotal={grandTotal}/>, document.getElementById('app'));
