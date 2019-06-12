import React from 'react';
import List from './List';

const Lists = ({ lists = [], onRemoveList, onRemoveCard, onCreateCard }) => {
  return (
    <section className="Lists">
      {lists.map(list => (
        <List
          key={list.id}
          list={list}
          onRemoveList={onRemoveList}
          onRemoveCard={onRemoveCard}
          onCreateCard={onCreateCard}
        />
      ))}
    </section>
  );
};

export default Lists;
