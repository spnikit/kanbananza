import React from 'react';

import CreateUser from './CreateUser';
import User from './User';
import withUsers from './withUsers';

const Users = ({ users, onUpdateUser, createUser }) => {
  return (
    <section className="Users">
      <h2>Users</h2>
      <CreateUser createUser={createUser} />
      {users.map(user => (
        <User key={user.id} user={user} onUpdateUser={onUpdateUser} />
      ))}
    </section>
  );
};

export default withUsers(Users);
