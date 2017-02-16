import React from 'react';

function RaisedButton({onClick, label}) {
  return (
    <button onClick={onClick} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
      {label}
    </button>
  );
}

export default RaisedButton;
