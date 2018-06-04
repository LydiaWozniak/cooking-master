import React, { Component } from 'react';
import styled from 'styled-components';
import star from '../atoms/Star.svg';

const List = styled.ul`
  list-style-type: none; 
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