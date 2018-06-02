import React, { Component } from 'react';
import styled from 'styled-components';
import Filters from '../molecules/Filters.js'; 

const NavBar = styled.nav`
  background: #D3D0C9; 
`;

export default class Nav extends Component {
  render() {
    return (
      <NavBar>
        <Filters />
      </NavBar>   
    )
  }
}
