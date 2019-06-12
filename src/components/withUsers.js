import React, { Component } from 'react';
import { users } from '../default-state.json';

const withUsers = WrappedComponent =>
  class extends Component {
    state = { users };

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

      return (
        <WrappedComponent
          createUser={this.createUser}
          updateUser={this.updateUser}
          users={users}
          {...this.props}
        />
      );
    }
  };

export default withUsers;
