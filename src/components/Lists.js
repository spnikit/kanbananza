import React from 'react';
import List from './List';

const Lists = ({
  lists = [],
  onRemoveList,
  onRemoveCard,
  onCreateCard,
  onMoveCardToList,
}) => {
  return (
    <section className="Lists">
      {lists.map(list => (
        <List
          key={list.id}
          lists={lists}
          list={list}
          onRemoveList={onRemoveList}
          onRemoveCard={onRemoveCard}
          onCreateCard={onCreateCard}
          onMoveCardToList={onMoveCardToList}
        />
      ))}
    </section>
  );
};

export default Lists;
