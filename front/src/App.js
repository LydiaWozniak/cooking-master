import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from './components/organisms';
import { Nav } from './components/organisms';
import { Newsfeed } from './components/organisms';
import './App.css';

const Page = styled.div`
  background: #FFFFFF; 
  display: flex;
  flex-direction: column; 
`;

class App extends Component {
  render() {
    return (
      <Page>
        <Header/> 
        <Nav/> 
        <Newsfeed/> 
      </Page>
    );
  }
}

export default App;
