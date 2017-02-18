import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import _ from 'lodash';

import A from './A.jsx';
import Header from './Header.jsx';
import Drawer from './Drawer.jsx';
import Content from './Content.jsx';
import Layout from './Layout.jsx';
import Day from './Day.jsx';
import RaisedButton from './RaisedButton.jsx';

class HelloWorld extends Component {
  constructor() {
    super();
    this.state = {
      buttons: []
    };
  }

  addButton() {
    const buttons = this.state.buttons.concat(<RaisedButton key={this.state.buttons.length} label={this.state.buttons.length}/>);
    this.setState({buttons});
  }

  next(date) {
    return date.add(1, 'd');
  }
  render() {
    const year = moment().year();
    const months = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ];
    let days = _.map(months, month => [
      year,
      month,
      1,
      0,
      0,
      0,
      0
    ]);
    const x = [];
    _.each(days, day => x.push(_.map(_.range(1, moment(day).endOf('month').date() + 1), y => [year, moment(day).month(), y])));

    let date = moment([2017, 0, 1]);
    return (
      <main className="mdl-layout__content">
        <div className="mdl-grid">
          <div className="mdl-layout-spacer"></div>
          <div className="mdl-cell mdl-cell--12-col">
            <table className="mdl-data-table mdl-shadow--2dp" style={{
              width: '100%'
            }}>
              <thead>
                <tr>
                  <th className="mdl-data-table__cell--non-numeric">Sun</th>
                  <th className="mdl-data-table__cell--non-numeric">Mon</th>
                  <th className="mdl-data-table__cell--non-numeric">Tue</th>
                  <th className="mdl-data-table__cell--non-numeric">Wed</th>
                  <th className="mdl-data-table__cell--non-numeric">Thu</th>
                  <th className="mdl-data-table__cell--non-numeric">Fri</th>
                  <th className="mdl-data-table__cell--non-numeric">Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Day/>
                  <Day/>
                  <Day/>
                  <Day/>
                  <Day/>
                  <Day/>
                  <Day/>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mdl-layout-spacer"></div>
        </div>
      </main>
    )
  }
}
ReactDOM.render(
  <HelloWorld/>, document.getElementById('app'));
