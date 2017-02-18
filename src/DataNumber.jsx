import React from 'react';

function DataNumber ({value}) {
  return (
    <td>
      <div style={{whiteSpace: 'nowrap', textAlign: 'right'}}>
        {value}
      </div>
    </td>
  );
}

export default DataNumber;
