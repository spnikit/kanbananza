import React, { Component } from 'react';
import CreateList from './CreateList';
import Lists from './Lists';

import defaultState from '../default-state.json';

class Application extends Component {
  state = {
    lists: defaultState.lists,
  };

  createList = ({ title }) => {
    this.setState({
      lists: [
        ...this.state.lists,
        {
          id: Date.now().toString(),
          title,
          cards: [],
        },
      ],
    });
  };

  createCard = (listId, { title, description }) => {
    let { lists } = this.state;

    const newCard = {
      id: Date.now().toString(),
      title,
      description,
    };

    lists = lists.map(listElem => {
      if (listElem.id === listId) {
        return {
          ...listElem,
          cards: [...listElem.cards, newCard],
        };
      }
      return listElem;
    });

    this.setState({
      lists,
    });
  };
  removeList = listId => {
    this.setState({
      lists: this.state.lists.filter(listElem => listElem.id !== listId),
    });
  };

  removeCard = (listId, cardId) => {
    this.setState({
      lists: this.state.lists.map(listItem => {
        if (listItem.id === listId) {
          return {
            ...listItem,
            cards: listItem.cards.filter(cardItem => cardItem.id !== cardId),
          };
        }
        return listItem;
      }),
    });
  };

  moveCardToList = (card, newListId) => {
    let { lists } = this.state;

    lists = lists.map(list => {
      let newCards;

      if (list.id === newListId) {
        newCards = [...list.cards, card];
      } else {
        newCards = list.cards.filter(cardElem => cardElem.id !== card.id);
      }

      return { ...list, cards: newCards };
    });

    this.setState({
      lists,
    });
  };

  render() {
    const { lists } = this.state;
    return (
      <main className="Application">
        <div>{/* Users will go here! */}</div>
        <section>
          <CreateList onCreateList={this.createList} />
          <Lists
            lists={lists}
            onRemoveList={this.removeList}
            onRemoveCard={this.removeCard}
            onCreateCard={this.createCard}
            onMoveCardToList={this.moveCardToList}
          />
        </section>
      </main>
    );
  }
}

export default Application;
