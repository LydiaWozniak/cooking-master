import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.header`
  background: #D3D0C9; 
  color: #FFFF; 
  height: 10%; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  font-size: 3em; 
`;

export default class Header extends Component {
  render() {
    return (
      <Main>
          <h1> Cooking Master</h1> 
      </Main>    
    )
  }
}

