import React, { Component } from "react";
import Form from "./Form";
import Filters from "./Filters";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  filters = [
    { name: "All", value: "all" },
    { name: "Meat", value: "meat" },
    { name: "Produce", value: "prod" },
    { name: "Dairy", value: "dairy" },
    { name: "Other", value: "other" }
  ];

  initialItems = [
    { name: "Steak", type: "meat", quantity: 3 },
    { name: "Apples", type: "prod", quantity: 4 },
    { name: "Milk (1L, 2%)", type: "dairy", quantity: 1 },
    { name: "Baguettes", type: "bakery", quantity: 2 }
  ];

  state = {
    items: this.initialItems,
    type: "all"
  };

  handleFilterClick = type => {
    this.setState({ type });
  };

  addItem = itemName => {
    // Lets find the type of itemName
    let type = "other";
    this.initialItems.map((item, index) => {
      if (item.name == itemName) type = item.type;
    });

    const item = { name: itemName, type: type, quantity: 1 };
    const newItems = this.state.items.concat(item);
    this.setState({ items: newItems });
  };

  incrementItemQuantity = index => {
    const updatedItems = this.state.items.map((item, i) => {
      if (i === index) {
        item.quantity++;
      }

      return item;
    });

    this.setState({
      items: updatedItems
    });
  };

  decrementItemQuantity = index => {
    const updatedItems = this.state.items.map((item, i) => {
      if (i === index && item.quantity > 0) {
        item.quantity--;
      }

      return item;
    });

    this.setState({
      items: updatedItems
    });
  };

  render() {
    return (
      <main className="layout" id="app">
        <header className="header">
          <h1>Grocery List</h1>
        </header>
        <Form addItem={this.addItem} />
        <Filters
          filters={this.filters}
          handleFilterClick={this.handleFilterClick}
          currentlySelectedFilter={this.state.type}
        />

        <List
          items={this.state.items}
          incrementItem={this.incrementItemQuantity}
          decrementItem={this.decrementItemQuantity}
          currentlySelectedFilter={this.state.type}
        />
      </main>
    );
  }
}

export default App;
