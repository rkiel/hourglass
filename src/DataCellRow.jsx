import React from 'react';

import DataLabel from './DataLabel.jsx';
import DataCell from './DataCell.jsx';
import DataNumber from './DataNumber.jsx';

function DataCellRow ({label, total}) {
  return (
    <tr>
      <DataLabel label={label} />
      <DataCell />
      <DataCell />
      <DataCell />
      <DataCell />
      <DataCell />
      <DataCell />
      <DataCell />
      <DataNumber value={total} />
    </tr>
  );
}

export default DataCellRow;
