import React, { Component } from 'react';
import styled from 'styled-components';
import { Header, Nav, Newsfeed } from './components/organisms';
import './App.css';

const Page = styled.div`
  background: #FFFFFF; 
  display: flex;
  flex-direction: column; 
`;

class App extends Component {

  submitFilter = (e) => {
    e.preventDefault();
    console.log('this is:', this);
  }

  render() {
    return (
      <Page>
        <Header/> 
        <Nav/> 
        <Newsfeed onClick={this.submitFilter}/>
      </Page>
    );
  }
}

export default App;
