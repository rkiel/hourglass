import React from 'react';
import _ from 'lodash';

import DataLabel from './DataLabel.jsx';
import DataCell from './DataCell.jsx';
import DataEmpty from './DataEmpty.jsx';
import DataNumber from './DataNumber.jsx';

function mapCellToData(day) {
  return day.isEmpty ? <DataEmpty /> : <DataCell key={day.date()} hours={800}/>;
}

function DataCellRow ({label, total, nowWeek}) {
  const dataCells = _.map(nowWeek, mapCellToData);

  return (
    <tr>
      <DataLabel label={label} />
      {dataCells}
      <DataNumber value={total} />
    </tr>
  );
}

export default DataCellRow;
