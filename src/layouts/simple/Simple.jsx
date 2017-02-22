import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import {nextWeek, prevWeek} from '../../actions/week';

class Header extends Component {
  render() {
    return (
    <div style={{margin: '15px'}}>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">{this.props.title}</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={this.props.handlePrev.bind(null,this.props.prevWeek)}>Previous</NavItem>
            <NavItem eventKey={2} href="#" onClick={this.props.handleNext.bind(null,this.props.nextWeek)}>Next</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {this.props.children}
    </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    prevWeek: state.week.prevWeek,
    nextWeek: state.week.nextWeek
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handlePrev: (prev) => dispatch(prevWeek(prev)),
    handleNext: (next) => dispatch(nextWeek(next))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
