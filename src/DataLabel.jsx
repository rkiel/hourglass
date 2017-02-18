import React from 'react';

function DataLabel ({label}) {
  return (
    <td>
      <div style={{whiteSpace: 'nowrap'}}>
        {label}
      </div>
    </td>
  );
}

export default DataLabel;
