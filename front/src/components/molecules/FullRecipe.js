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

const Exit = styled.button`
  height: 20px; 
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`; 

class FullRecipe extends Component {

  static defaultProps = {
		starred: false, 
	}

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
    starred: PropTypes.bool, 
  }


  render() {
    return (
      <RecipeContents>
          <h1>{this.props.name}</h1>
          <List>
            <li><h3>Cooking Time: {this.props.cookingTime}</h3></li>
            <h3>Ingredients:</h3>
            {this.props.ingredients.map(({quantity, name}) => (
              <li key={name}>{quantity} of {name}</li>  
            ))}
          </List> 
        <Image src={this.props.image} alt={this.props.name}/> 
        <StarButton starred={this.props.starred} starOnChange={this.props.starOnChange} />
        <Exit onClick={this.props.onClick}><span role='img' aria-label="exit-button">❌</span></Exit>
      </RecipeContents>  
        
    );
  }
}

export default FullRecipe;