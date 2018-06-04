import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import emptystar from '../atoms/EmptyStar.svg';

const RecipeContents = styled.article`
  display: flex; 
  flex-wrap: nowrap;
  justify-content: space-evenly; 
  align-content: center;  
  border: 2px solid #635155;
  margin: 5%; 
  box-sizing: border-box;
`;

const List = styled.ul`
  list-style-type: none;
  align-self: center; 
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
  align-self: center; 
`;

const Starred = styled.img`
  height: 20px;
  align-self: center; 
  &:hover {
    background: #635155;
  }
`;

class FullRecipe extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    cookingTime: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.shape({
      quantity: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      name: PropTypes.string.isRequired
    })).isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <RecipeContents onClick={this.props.onClick}>
          <h1>{this.props.name}</h1>
          <List>
            <li><h3>{this.props.cookingTime}</h3></li>
            {this.props.ingredients.map(({quantity, name}) => (
              <li key={name}>{quantity} of {name}</li>  
            ))}
          </List> 
        <Image src={this.props.image} alt={this.props.name}/> 
        <Starred src={emptystar} alt="starred"/>
      </RecipeContents>  
        
    );
  }
}

export default FullRecipe;