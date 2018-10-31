import React, { Component } from 'react';
import LotsOfGreetings from './Hello';
import './App.css';
import ToDoList from './todolist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LotsOfGreetings />
        <ToDoList />
      </div>
    );
  }
}

export default App;
