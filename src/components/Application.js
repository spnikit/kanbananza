import React, { Component } from 'react';
import CreateList from './CreateList';
import Lists from './Lists';

import defaultState from '../default-state.json';

class Application extends Component {
  state = {
    lists: defaultState.lists,
  };

  removeList = listId => {
    this.setState({
      lists: this.state.lists.filter(listElem => listElem.id !== listId),
    });
  };

  removeCard = (list, card) => {
    this.setState({
      lists: this.state.lists.map(listItem => {
        if (listItem.id === list.id) {
          return {
            ...listItem,
            cards: listItem.cards.filter(cardItem => cardItem.id !== card.id),
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
          <CreateList />
          <Lists
            lists={lists}
            onRemoveList={this.removeList}
            onRemoveCard={this.removeCard}
          />
        </section>
      </main>
    );
  }
}

export default Application;
