require('font-awesome/css/font-awesome.css');
require('styles/app.scss');

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'containers/Header';

const App = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
