import React from 'react';
import _ from 'lodash';

import DataLabel from './DataLabel.jsx';
import DataCell from './DataCell.jsx';
import DataNumber from './DataNumber.jsx';

function mapCellToData(cell) {
  return <DataCell key={cell.mDate.date()} hours={cell.hours}/>;
}

function DataCellRow ({label, total, cells}) {
  const dataCells = _.map(cells, mapCellToData);

  return (
    <tr>
      <DataLabel label={label} />
      {dataCells}
      <DataNumber value={total} />
    </tr>
  );
}

export default DataCellRow;
