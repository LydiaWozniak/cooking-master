import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from './components/organisms';
import { Nav } from './components/organisms';
import './App.css';

// const Title = styled.h1`
//   font-size: 1.5em;
// `;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/> 
        <Nav/> 
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
