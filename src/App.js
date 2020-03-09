import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './GroceryList';

class App extends React.Component {
    state = {
      groceries: [
        { id: 1, name: "bananas", complete: true, },
        { id: 2, name: "apples", complete: false, },
        { id: 3, name: "oranges", complete: true, },
      ]
    };
  
  render() {
    const { groceries } = this.state;

    return(
        <List name="Grocery List" items={groceries} />
    );
  }
}

export default App;
