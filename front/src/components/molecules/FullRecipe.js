import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarButton from './StarButton';

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
    starOnChange: PropTypes.func,
    onClick: PropTypes.func,
  }


  render() {
    return (
      <RecipeContents>
          <h1>{this.props.name}</h1>
          <List>
            <li><h3>{this.props.cookingTime}</h3></li>
            {this.props.ingredients.map(({quantity, name}) => (
              <li key={name}>{quantity} of {name}</li>  
            ))}
          </List> 
        <Image src={this.props.image} alt={this.props.name}/> 
        <StarButton starOnChange={this.props.starOnChange} />
        <button onClick={this.props.onClick}><span role='img' aria-label="exit-button">❌</span></button>
      </RecipeContents>  
        
    );
  }
}

export default FullRecipe;