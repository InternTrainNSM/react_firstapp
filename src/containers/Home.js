require('font-awesome/css/font-awesome.css');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class Home extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location.key !== this.props.location.key) {
      this.restoreSearch();
    }
  }

  getEntity() {
    return this.props.search;
  }

  render() {
    return (
      <div className="container-fluid">
        <p>WOw works</p>
      </div>
    );
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired,
};

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  search: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    search: state.search,
  };
}

// reactMixin(Home.prototype, FetchDataMixin);

export default connect(mapStateToProps)(Home);
