import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import logo from './static/images/logo.png';

class App extends Component {
  render() {
    const menuItems = ["HOME", "SHOP", "ROOMS", "BOOKING", "CONTACT"];
    return (
      <div className="App">
        <Header headers={ menuItems } logo={ logo } />
        <Main />
      </div>
    );
  }
}

export default App;
