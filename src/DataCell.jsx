import React from 'react';

import {FormControl} from 'react-bootstrap';

function DataCell ({}) {
  return (
    <td>
      <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
    </td>
  );
}

export default DataCell;
