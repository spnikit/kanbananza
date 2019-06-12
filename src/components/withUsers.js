import React, { Component } from 'react';
import defaulState from '../default-state.json';

const withUsers = Component =>
  class extends Component {
    state = {};

    render() {
      return <Component {...this.props} />;
    }
  };

export default withUsers;
