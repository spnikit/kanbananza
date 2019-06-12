import React from 'react';
import List from './List';

const Lists = ({
  lists = [],
  users,
  onRemoveList,
  onRemoveCard,
  onCreateCard,
  onMoveCardToList,
  onAssignCard,
}) => {
  return (
    <section className="Lists">
      {lists.map(list => (
        <List
          key={list.id}
          users={users}
          lists={lists}
          list={list}
          onRemoveList={onRemoveList}
          onRemoveCard={onRemoveCard}
          onCreateCard={onCreateCard}
          onMoveCardToList={onMoveCardToList}
          onAssignCard={onAssignCard}
        />
      ))}
    </section>
  );
};

export default Lists;
