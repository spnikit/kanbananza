import { EventEmitter } from 'events';
import { users } from '../default-state.json';

class UserStore extends EventEmitter {
  users = users;

  createUser = ({ name, email }) => {
    this.users = [
      ...this.users,
      {
        id: Date.now().toString(),
        name,
        email,
      },
    ];

    this.emit('change', this.users);
  };

  updateUser = updatedUser => {
    this.users = this.users.map(user =>
      user.id === updatedUser.id ? updatedUser : user,
    );

    this.emit('change', this.users);
  };
}

export default new UserStore();
