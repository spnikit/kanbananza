import React, { Component } from 'react';
// import { users } from '../default-state.json';
import UserStore from './UserStore';

class RenderUsers extends Component {
  state = { users: UserStore.users };

  componentDidMount() {
    this.unsubscribe = UserStore.on('change', users =>
      this.setState({ users }),
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { users } = this.state;
    const { createUser, updateUser } = UserStore;
    return <>{this.props.children({ users, createUser, updateUser })}</>;
  }
}

export default RenderUsers;
