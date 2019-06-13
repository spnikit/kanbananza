import React from 'react';

import CreateUser from './CreateUser';
import User from './User';
import withUsers from './withUsers';
import RenderUsers from './RenderUsers';

const Users = ({ users, onUpdateUser, createUser }) => {
  return (
    <RenderUsers>
      {({ users, updateUser, createUser }) => (
        <section className="Users">
          <h2>Users</h2>
          <CreateUser createUser={createUser} />
          {users.map(user => (
            <User key={user.id} user={user} onUpdateUser={updateUser} />
          ))}
        </section>
      )}
    </RenderUsers>
  );
};

export default withUsers(Users);
