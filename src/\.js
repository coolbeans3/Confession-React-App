import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Toolbar.jsx'
import MainBox from './MainBox.jsx'
import MessageBoard from './MessageBoard.jsx'

class App extends Component {
    handleRefreshClick(){
        console.log("refresh is being clicked!")
    }
  render() {
    return (
      <div>
      <Toolbar whenRefreshClick={this.handleRefreshClick.bind(this)}/>
      <MainBox />
      <MessageBoard />
      </div>
    );
  }
}

export default App;
