import React, { Component } from 'react';
import LotsOfGreetings from './Hello';
import './App.css';
import ToDoList from './todolist';
import Show from './Showme';


class App extends Component {
  render() {
    return (
      <div className="App">
        <LotsOfGreetings />
        <ToDoList />
        <Show />
      </div>
    );
  }
}

export default App;
