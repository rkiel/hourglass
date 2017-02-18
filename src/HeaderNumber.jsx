import React from 'react';

function HeaderNumber ({month,day,label}) {
  if (month && day) {
    label = `${month}/${day}<br />${label}`
  }
  return (
    <th style={{textAlign: 'right'}}><span dangerouslySetInnerHTML={{__html: label}} /></th>
  );
}

export default HeaderNumber;
