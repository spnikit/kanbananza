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

  createCard = (listId, card) => {
    // let listCopy = { ...this.state.lists.find(list => list.id === listId) };
    // let cardsCopy = [...listCopy.cards];
    // let newCard = {
    //   id: Date.now().toString(),
    //   title: card.title,
    //   description: card.description,
    // };
    // listCopy.cards = [...listCopy.cards, newCard];

    // this.setState({
    //   lists: [...this.state.lists, listCopy],
    // });

    this.setState({
      lists: this.state.lists.map(listElem => {
        if (listElem.id === listId) {
          return {
            ...listElem,
            cards: [
              ...listElem.cards,
              {
                id: Date.now().toString(),
                title: card.title,
                description: card.description,
              },
            ],
          };
        }
        return listElem;
      }),
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
          />
        </section>
      </main>
    );
  }
}

export default Application;
