import React, { Component } from "react";
import Form from "./Form";
import Filters from "./Filters";
import List from "./List";

class App extends Component {
  filters = [
    { name: "All", value: "all" },
    { name: "Meat", value: "meat" },
    { name: "Produce", value: "prod" },
    { name: "Dairy", value: "dairy" },
    { name: "Bakery", value: "bakery" }
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
    const item = { name: itemName, type: "meat", quantity: 1 };
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
          onFilterCLick={this.handleFilterClick}
        />
        <List
          items={this.state.items}
          incrementItem={this.incrementItemQuantity}
          decrementItem={this.decrementItemQuantity}
        />
      </main>
    );
  }
}

export default App;
