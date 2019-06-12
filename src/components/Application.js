import React, { Component } from 'react';
import CreateList from './CreateList';
import Lists from './Lists';
import Users from './Users';

import { lists, users } from '../default-state.json';

class Application extends Component {
  state = {
    lists,
    users,
  };

  assignCard = (cardId, userId) => {
    let { lists } = this.state;

    lists = lists.map(list => {
      if (!list.cards.some(card => card.id === cardId)) return list;

      const cards = list.cards.map(card => {
        if (card.id !== cardId) return { ...card, assignedTo: '' };

        return { ...card, assignedTo: userId };
      });

      return { ...list, cards };
    });

    this.setState({ lists });
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
        <Users />
        <section>
          <CreateList onCreateList={this.createList} />
          <Lists
            lists={lists}
            onRemoveList={this.removeList}
            onRemoveCard={this.removeCard}
            onCreateCard={this.createCard}
            onMoveCardToList={this.moveCardToList}
            onAssignCard={this.assignCard}
          />
        </section>
      </main>
    );
  }
}

export default Application;
