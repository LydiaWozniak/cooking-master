import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarButton from './StarButton';

const RecipeContents = styled.article`
  background: white; 
  display: flex; 
  flex-direction: column; 
  flex-wrap: nowrap;
  justify-content: space-evenly; 
  align-self: center; 
  align-items: center; 
  border: 2px solid #c9c5c6;
  border-radius: 5px; 
  padding: 0 0 5% 0 ; 
  margin: 5%; 
  width: 90%; 
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 60%;
  height: auto;
  align-self: center; 
`;

const List = styled.ul`
  text-decoration: none; 
  list-style-type: none;
`;

const TitleBlock = styled.div`
  font-size: 1.5em; 
  display: flex; 
  width: 100%; 
  justify-content: space-around; 
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
  align-self: flex-end; 
  margin: 2%; 
  &:hover{
      transform: scale(1.5);
    }
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
          <Exit onClick={this.props.onClick}><span role='img' aria-label="exit-button">❌</span></Exit>
          <TitleBlock>
            <h1>{this.props.name}</h1>
            <StarButton starred={this.props.starred} starOnChange={this.props.starOnChange} />
          </TitleBlock>
          <Image src={this.props.image} alt={this.props.name}/> 
          <h3>Cooking Time: {this.props.cookingTime}</h3>
          <List><h3>To make this recipe at home, you will need:</h3> 
            {this.props.ingredients.map(({quantity, name}) => (
              <li key={name}>{quantity} {name}</li>
            ))}
          </List> 
      </RecipeContents>  
        
    );
  }
}

export default FullRecipe;