import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {ButtonToolbar, ButtonGroup, Button, Glyphicon, Table, FormControl, Grid, Row, Col} from 'react-bootstrap';

import Header from './Header.jsx';
import DataLabel from './DataLabel.jsx';
import DataCell from './DataCell.jsx';
import DataNumber from './DataNumber.jsx';
import DataCellRow from './DataCellRow.jsx';
import HeaderNumber from './HeaderNumber.jsx';
import HeaderLabel from './HeaderLabel.jsx';

class HelloWorld extends Component {
  render() {
    return (
      <div style={{margin: '15px'}}>
        <Header title="Hourglass"/>
        <Table bordered condensed hover>
          <thead>
            <tr>
              <HeaderLabel label="Account" />
              <HeaderNumber label="Sunday" month={2} day={7} />
              <HeaderNumber label="Monday" month={2} day={8} />
              <HeaderNumber label="Tuesday" month={2} day={9} />
              <HeaderNumber label="Wednesday" month={2} day={10} />
              <HeaderNumber label="Thurday" month={2} day={11} />
              <HeaderNumber label="Friday" month={2} day={12} />
              <HeaderNumber label="Saturday" month={2} day={13} />
              <HeaderNumber label="TOTAL" />
            </tr>
          </thead>
          <tbody>
            <DataCellRow label="Project #1" total="40.00" />
            <DataCellRow label="Holiday" total="0.00" />
            <DataCellRow label="PTO" total="0.00" />
            <DataCellRow label="Training" total="0.00" />
            <tr>
              <DataLabel label="TOTAL" />
              <DataNumber value="0.00" />
              <DataNumber value="8.00" />
              <DataNumber value="8.00" />
              <DataNumber value="8.00" />
              <DataNumber value="8.00" />
              <DataNumber value="8.00" />
              <DataNumber value="0.00" />
              <DataNumber value="40.00" />
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}
ReactDOM.render(
  <HelloWorld/ >,
    document.getElementById('app'));
