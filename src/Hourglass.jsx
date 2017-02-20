import React, {Component} from 'react';
import _ from 'lodash';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';

import Header from './Header.jsx';
import DataLabel from './DataLabel.jsx';
import DataNumber from './DataNumber.jsx';
import DataEmpty from './DataEmpty.jsx';
import DataCellRow from './DataCellRow.jsx';
import HeaderNumber from './HeaderNumber.jsx';
import HeaderLabel from './HeaderLabel.jsx';
import HeaderEmpty from './HeaderEmpty.jsx';

import Hours from './util/Hours';
import Calendar from './util/Calendar';

function toHeader(nowWeek) {
  return _.map(nowWeek, (day) => day.isEmpty ? <HeaderEmpty key={day.day} label={day.label} /> : <HeaderNumber key={day.day()} label={day.format('dddd')} mDate={day} />);
}

function toFooter(nowWeek) {
  return _.map(nowWeek, (day) => day.isEmpty ? <DataEmpty key={day.day} /> : <DataNumber key={day.day()} value={Hours.toDollars(day.dailyTotal)} />);
}

class Hourglass extends Component {

  render() {
    const cellRows = _.map(this.props.accounts, row => (<DataCellRow key={row.code} label={row.label} cells={row.cells} total={Hours.toDollars(row.weeklyTotal)} />));
    const week = toHeader(this.props.nowWeek);
    const totals = toFooter(this.props.nowWeek);

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
    accounts: state.accounts,
    nowWeek: state.week.nowWeek
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Hourglass);
