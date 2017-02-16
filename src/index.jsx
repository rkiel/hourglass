import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import A from './A.jsx';
import Header from './Header.jsx';
import Drawer from './Drawer.jsx';
import Content from './Content.jsx';
import Layout from './Layout.jsx';
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
      <Layout>
        <Header title="Hourglass"/>
        <Drawer title="Hourglass"/>
        <Content>
          <h1>Hello World</h1>
          <div>
            <RaisedButton label="Click Me" onClick={this.addButton.bind(this)}/>
          </div>
          <div>
            {this.state.buttons}
          </div>
        </Content>
      </Layout>
    )
  }
}
ReactDOM.render(
  <HelloWorld/>, document.getElementById('app'));
