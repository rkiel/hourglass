import React from 'react';
import {FormControl} from 'react-bootstrap';

function DataEmpty () {
  return (
    <td>
      <FormControl disabled style={{textAlign: 'right'}} type="text"  maxLength={5} />
    </td>
  );
}

export default DataEmpty;
