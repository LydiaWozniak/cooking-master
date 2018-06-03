import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import emptystar from '../atoms/EmptyStar.svg';
// import recipes from '../../assets/recipes.json'; 

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
  height: 50px;
  width: 50px;
  align-self: center; 
`;

const Starred = styled.img`
  height: 20px;
  align-self: center; 
  &:hover {
    background: #635155;
  }
`;


// class Preview extends Component {
// render() {
//   return <RecipeContents>
//     {Object.keys(recipes).map((key, index) => (
//       <List key={key}>
//         <li>{recipes[key].name}</li>
//         <li>{recipes[key].mainIngredients}</li>
//         <li>{recipes[key].cookingTime}</li>
//       </List>
//     ))}
//   </RecipeContents>
// }
// }

class RecipePreview extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    mainIngredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    cookingTime: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <RecipeContents onClick={this.props.onClick}>
        <List>
          <li>{this.props.name}</li>
          <li>{this.props.mainIngredients.join(', ')}</li>
          <li>{this.props.cookingTime}</li>
        </List>   
        <Image src={this.props.image} alt={this.props.name}/> 
        <Starred src={emptystar} alt="starred"/>
      </RecipeContents>  
        
    );
  }
}

export default RecipePreview;

