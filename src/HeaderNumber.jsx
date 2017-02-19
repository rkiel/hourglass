import React from 'react';

function HeaderNumber ({mDate,label}) {
  if (mDate) {
    label = `${mDate.month()+1}/${mDate.date()}<br />${label}`
  }
  return (
    <th style={{textAlign: 'right'}}><span dangerouslySetInnerHTML={{__html: label}} /></th>
  );
}

export default HeaderNumber;
