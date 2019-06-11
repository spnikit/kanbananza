import React from 'react';
import List from './List';

const Lists = ({ lists = [], onRemoveList, onRemoveCard }) => {
  return (
    <section className="Lists">
      {lists.map(list => (
        <List
          key={list.id}
          list={list}
          onRemoveList={onRemoveList}
          onRemoveCard={onRemoveCard}
        />
      ))}
    </section>
  );
};

export default Lists;
