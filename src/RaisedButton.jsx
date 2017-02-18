import React from 'react';

import {Button} from 'react-bootstrap';

function RaisedButton({onClick, label}) {
  return (
    <Button onClick={onClick}>
      {label}
    </Button>
  );
}

export default RaisedButton;
