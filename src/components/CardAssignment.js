import React from 'react';

import RenderUsers from './RenderUsers';

const CardAssignment = ({ card = {}, users = [], onAssignCard = () => {} }) => {
  // ----
  const handleChange = event => {
    const userId = +event.target.value;

    if (onAssignCard) onAssignCard(card.id, userId);
  };

  return (
    <RenderUsers>
      {({ users }) => {
        const user = users.find(user => {
          return +user.id === card.assignedTo;
        });

        return (
          <div className="CardAssignment" style={{ fontSize: '0.8em' }}>
            {user && card.assignedTo ? (
              <p>
                Card assigned to <strong>{user.name}</strong>.
              </p>
            ) : (
              <p>Card unassigned.</p>
            )}
            <select value={card.assignedTo} onChange={handleChange}>
              <option value="">(Unassigned)</option>
              {users.map(user => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        );
      }}
    </RenderUsers>
  );
};

export default CardAssignment;
