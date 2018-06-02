import React, { Component } from 'react';
import styled from 'styled-components';
import star from '../atoms/Star.svg';

const List = styled.ul`
    display: flex; 
    justify-content: flex-start;
    flex-wrap: nowrap;
    list-style-type: none;
    align-items: center; 
`;

const Item = styled.li`
    display: inline;
    padding-left: 1em; 

    &:hover {
    background: #635155;
  }
`;
const Starred = styled.img`
    height: 20px;
`;



class Filters extends Component {
  render() {
    return (
      <List>
          <Item>All</Item>
          <Item><Starred src={star} alt="starred"/></Item>
      </List>   
        
    );
  }
}

export default Filters;