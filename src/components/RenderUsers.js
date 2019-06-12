import React, { Component } from 'react';
import { users } from '../default-state.json';

class RenderUsers extends Component {
  state = {
    users,
  };

  createUser = ({ name, email }) => {
    let { users } = this.state;

    users = [
      ...users,
      {
        id: Date.now().toString(),
        name,
        email,
      },
    ];

    this.setState({ users });
  };

  updateUser = updatedUser => {
    let { users } = this.state;

    users = users.map(user =>
      user.id === updatedUser.id ? updatedUser : user,
    );

    this.setState({ users });
  };

  render() {
    const { users } = this.state;
    const { createUser, updateUser } = this;
    return <>{this.props.children({ users, createUser, updateUser })}</>;
  }
}

export default RenderUsers;
