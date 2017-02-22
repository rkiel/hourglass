import React, {Component} from 'react';
import _ from 'lodash';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';

import SimpleLayout from '../../layouts/simple/Simple.jsx';

import DataLabel from './DataLabel.jsx';
import DataNumber from './DataNumber.jsx';
import DataEmpty from './DataEmpty.jsx';
import DataCellRow from './DataCellRow.jsx';
import HeaderNumber from './HeaderNumber.jsx';
import HeaderLabel from './HeaderLabel.jsx';
import HeaderEmpty from './HeaderEmpty.jsx';

import Hours from '../../util/Hours';
import Calendar from '../../util/Calendar';

function mapDayToHeader(day) {
  return day.isEmpty ? <HeaderEmpty key={day.day} label={day.label} /> : <HeaderNumber key={day.day()} label={day.format('dddd')} mDate={day} />;
}

function mapDayToData(day) {
  return day.isEmpty ? <DataEmpty key={day.day} /> : <DataNumber key={day.day()} value={Hours.toDollars(day.dailyTotal)} />;
}

function mapAccountToCellRow(account) {
  return <DataCellRow key={account.code} label={account.label} cells={account.cells} total={Hours.toDollars(account.weeklyTotal)} />;
}

class Page extends Component {

  render() {
    const cellRows = _.map(this.props.accounts, mapAccountToCellRow);
    const week = _.map(this.props.nowWeek, mapDayToHeader);
    const totals = _.map(this.props.nowWeek, mapDayToData);

    return (
      <SimpleLayout>
        <h3 style={{textAlign: 'center', margin: '20px'}}>{this.props.month}</h3>
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
      </SimpleLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    accounts: state.accounts,
    nowWeek: state.week.nowWeek,
    month: state.week.month
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
