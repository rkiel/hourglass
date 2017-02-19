import React from 'react';
import _ from 'lodash';

import DataLabel from './DataLabel.jsx';
import DataCell from './DataCell.jsx';
import DataNumber from './DataNumber.jsx';

function DataCellRow ({label, total, cells}) {
  const dataCells = _.map(cells, cell => <DataCell key={cell.mDate.date()} hours={cell.hours}/>);

  return (
    <tr>
      <DataLabel label={label} />
      {dataCells}
      <DataNumber value={total} />
    </tr>
  );
}

export default DataCellRow;
