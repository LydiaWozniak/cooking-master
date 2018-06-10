import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarButton from './StarButton';
// import recipes from '../../assets/recipes.json'; 

const RecipeContents = styled.article`
  display: flex; 
  flex-wrap: nowrap;
  justify-content: space-evenly; 
  align-content: center;  
  border: 2px solid #635155;
  margin: 10%; 
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

const Expand = styled.button`
  height: 10px;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
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

  static defaultProps = {
		starred: false, 
	}

  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    starOnChange: PropTypes.func, 
    starred: PropTypes.bool, 
  }

  render() {
    return (
      <RecipeContents>
        <List>
          <li><h1>{this.props.name}</h1></li>
        </List>   
        <Image src={this.props.image} alt={this.props.name}/> 
        <StarButton starred={this.props.starred} starOnChange={this.props.starOnChange} />
        <Expand onClick={this.props.onClick}> Click to expand </Expand>
      </RecipeContents>  
        
    );
  }
}

export default RecipePreview;

