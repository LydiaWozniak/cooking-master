import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import star from '../atoms/Star.svg';

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center; 
`;

const Item = styled.li`
  margin-left: 1em; 
  list-style-type: none; 
  &:hover {
    transform: scale(1.5);
}
`;

const All = styled.span`
  &:hover {
    background: #635155;
    color: white; 
}
`;

const Starred = styled.img`
  height: 20px;
`;

class Filters extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  filterAll = () => this.props.onChange('all'); 
  filterStarred = () => this.props.onChange('starred'); 

  render() {
    return (
      <List>
          <Item onClick={this.filterAll}><All>All</All></Item>
          <Item><Starred onClick={this.filterStarred} src={star} alt="starred"/></Item>
      </List>   
        
    );
  }
}

export default Filters;