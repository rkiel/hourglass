import React from 'react';

import {FormControl} from 'react-bootstrap';

import Hours from './util/Hours';

function handleChange(e) {
  let userInput = e.target.value;
  let userValue = 0;
  if (userInput.match(/^\d$/) ||
      userInput.match(/^\d\d$/) ||
      userInput.match(/^\d\.\d?\d?$/) ||
      userInput.match(/^\d\d\.\d?\d?$/)) {
    userValue = parseInt((parseFloat(userInput) * 100).toFixed());
  } else {
    userInput = '';
    userValue = null;
  }
}

function DataCell ({hours}) {
  return (
    <td>
      <FormControl value={Hours.toDollars(hours)} style={{textAlign: 'right'}} type="text"  maxLength={5} onChange={handleChange}/>
    </td>
  );
}

export default DataCell;
