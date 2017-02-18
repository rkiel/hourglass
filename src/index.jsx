import React from 'react';
import ReactDOM from 'react-dom';

import Hourglass from './Hourglass.jsx';

const rows = [
  {code: "P1", label: "Project #1", total: "40.00"},
  {code: "H", label: "Holiday", total: "0.00"},
  {code: "P", label: "PTO", total: "0.00"},
  {code: "T", label: "Training", total: "0.00"}
];

const week = [
  {label: 'Sunday', month: 2, day: 7, year: 2017, total: '0.00'},
  {label: 'Monday', month: 2, day: 8, year: 2017, total: '8.00'},
  {label: 'Tuesday', month: 2, day: 9, year: 2017, total: '8.00'},
  {label: 'Wednesday', month: 2, day: 10, year: 2017, total: '8.00'},
  {label: 'Thursday', month: 2, day: 11, year: 2017, total: '8.00'},
  {label: 'Friday', month: 2, day: 12, year: 2017, total: '8.00'},
  {label: 'Saturday', month: 2, day: 13, year: 2017, total: '0.00'}
];

const grandTotal = '40.00';


ReactDOM.render(
  <Hourglass cellRows={rows} week={week} grandTotal={grandTotal}/>, document.getElementById('app'));
