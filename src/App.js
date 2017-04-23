import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Toolbar.jsx';
import MainBox from './MainBox.jsx';
import MessageBoard from './MessageBoard.jsx';

class App extends Component {
  render() {
    return (
      <div>
      <Toolbar />
      <MainBox />
      <MessageBoard />
      </div>
    );
  }
}

export default App;
