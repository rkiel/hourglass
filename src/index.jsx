import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {ButtonToolbar, ButtonGroup, Button, Glyphicon, Table, FormControl, Grid, Row, Col} from 'react-bootstrap';

import Header from './Header.jsx';
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

  render() {
    return (
      <div style={{margin: '15px'}}>
        <Header title="Hourglass"/>
        <Table bordered condensed hover>
          <thead>
            <tr>
              <th>Account</th>
              <th style={{textAlign: 'right'}}>2/7<br />Sunday</th>
              <th style={{textAlign: 'right'}}>2/8<br />Monday</th>
              <th style={{textAlign: 'right'}}>2/9<br />Tuesday</th>
              <th style={{textAlign: 'right'}}>2/10<br />Wednesday</th>
              <th style={{textAlign: 'right'}}>2/11<br />Thursday</th>
              <th style={{textAlign: 'right'}}>2/12<br />Friday</th>
              <th style={{textAlign: 'right'}}>2/13<br />Saturday</th>
              <th style={{textAlign: 'right'}}>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div style={{whiteSpace: 'nowrap'}}>
                  Project #1
                </div>
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <div style={{whiteSpace: 'nowrap', textAlign: 'right'}}>
                  45.00
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div style={{whiteSpace: 'nowrap'}}>
                  Holiday
                </div>
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <div style={{whiteSpace: 'nowrap', textAlign: 'right'}}>
                  45.00
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div style={{whiteSpace: 'nowrap'}}>
                  PTO
                </div>
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <div style={{whiteSpace: 'nowrap', textAlign: 'right'}}>
                  45.00
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div style={{whiteSpace: 'nowrap'}}>
                  Training
                </div>
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <FormControl  style={{textAlign: 'right'}} type="text"  maxLength={5} />
              </td>
              <td>
                <div style={{whiteSpace: 'nowrap', textAlign: 'right'}}>
                  45.00
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div style={{whiteSpace: 'nowrap'}}>
                  TOTAL
                </div>
              </td>
              <td>
                <div style={{whiteSpace: 'nowrap', textAlign: 'right'}}>
                  0.00
                </div>
              </td>
              <td>
                <div style={{whiteSpace: 'nowrap', textAlign: 'right'}}>
                  8.00
                </div>
              </td>
              <td>
                <div style={{whiteSpace: 'nowrap', textAlign: 'right'}}>
                  8.00
                </div>
              </td>
              <td>
                <div style={{whiteSpace: 'nowrap', textAlign: 'right'}}>
                  8.00
                </div>
              </td>
              <td>
                <div style={{whiteSpace: 'nowrap', textAlign: 'right'}}>
                  8.00
                </div>
              </td>
              <td>
                <div style={{whiteSpace: 'nowrap', textAlign: 'right'}}>
                  8.00
                </div>
              </td>
              <td>
                <div style={{whiteSpace: 'nowrap', textAlign: 'right'}}>
                  0.00
                </div>
              </td>
              <td>
                <div style={{whiteSpace: 'nowrap', textAlign: 'right'}}>
                  45.00
                </div>
              </td>
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
