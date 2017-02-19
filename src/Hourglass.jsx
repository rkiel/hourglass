import React, {Component} from 'react';
import _ from 'lodash';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';

import Header from './Header.jsx';
import DataLabel from './DataLabel.jsx';
import DataNumber from './DataNumber.jsx';
import DataCellRow from './DataCellRow.jsx';
import HeaderNumber from './HeaderNumber.jsx';
import HeaderLabel from './HeaderLabel.jsx';

import Hours from './util/Hours';

class Hourglass extends Component {

  render() {
    const cellRows = _.map(this.props.cellRows, row => (<DataCellRow key={row.code} label={row.label} cells={row.cells} total={Hours.toDollars(row.weeklyTotal)} />));
    const week = _.map(this.props.nowWeek, day => (<HeaderNumber key={day.date()} label={day.format('dddd')} mDate={day} />));
    const totals = _.map(this.props.week, day => (<DataNumber key={day.date()} value={Hours.toDollars(day.dailyTotal)} />));

    return (
      <div style={{margin: '15px'}}>
        <Header title="Hourglass"/>
        <Table bordered condensed hover>
          <thead>
            <tr>
              <HeaderLabel label="Account" />
              {week}
              <HeaderNumber label="TOTAL" />
            </tr>
          </thead>
          <tbody>
            {cellRows}
            <tr>
              <DataLabel label="TOTAL" />
              {totals}
              <DataNumber value={Hours.toDollars(this.props.grandTotal)} />
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    nowWeek: state.week.nowWeek
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Hourglass);
