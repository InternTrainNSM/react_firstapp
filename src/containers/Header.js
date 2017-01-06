import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import cookie from 'react-cookie';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { user: cookie.load('user') };
  }

  render() {
    return (
      <Navbar fixedTop fluid>
        <div className="container-fluid">
        <p>It works</p>
        </div>
      </Navbar>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Header);
