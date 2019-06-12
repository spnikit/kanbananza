import React, { Component } from 'react';

import CreateCard from './CreateCard';
import Card from './Card';

class List extends Component {
  state = { showOptions: false };

  toggleOptions = () => {
    this.setState(({ showOptions }) => ({
      showOptions: !showOptions,
    }));
  };

  createCard = card => {
    this.props.onCreateCard(this.props.list.id, card);
  };

  removeList = () => {
    const { onRemoveList, list } = this.props;
    onRemoveList(list.id);
  };

  render() {
    const { list = {}, onRemoveCard, lists, onMoveCardToList } = this.props;
    const { showOptions } = this.state;

    return (
      <article className="List">
        <h2>{list.title}</h2>
        {showOptions && (
          <div className="List-options">
            <CreateCard onCreateCard={this.createCard} listId={list.id} />
            <button className="List-remove danger" onClick={this.removeList}>
              Remove List
            </button>
          </div>
        )}
        <button
          className="List-toggle toggle-options"
          onClick={this.toggleOptions}
        >
          Toggle Options
        </button>
        <div>
          {list.cards.map(card => (
            <Card
              key={card.id}
              lists={lists}
              card={card}
              onRemoveCard={onRemoveCard}
              onMoveCardToList={onMoveCardToList}
              listId={list.id}
            />
          ))}
        </div>
      </article>
    );
  }
}

export default List;
