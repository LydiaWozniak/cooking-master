import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarButton from './StarButton';
// import recipes from '../../assets/recipes.json'; 

const RecipeContents = styled.article`
  background: white; 
  display: flex; 
  flex-direction: column; 
  flex-wrap: nowrap;
  justify-content: space-evenly; 
  align-content: center;  
  border: 2px solid #c9c5c6;
  border-radius: 5px; 
  padding: 2%; 
  margin: 5% 10%; 
  width: 30%; 
  box-sizing: border-box;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
`;

const Image = styled.img`
  height: auto; 
  width: 90%; 
  align-self: center; 
  padding: 5%; 
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
  &:hover{
    text-shadow: 1px 1px #D3D0C9;
    }
`;

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
        <TitleBlock>
          <h1>{this.props.name}</h1>
          <StarButton starred={this.props.starred} starOnChange={this.props.starOnChange} />
        </TitleBlock>
        <Image src={this.props.image} alt={this.props.name}/> 
        <Expand onClick={this.props.onClick}>Click to see more</Expand>
      </RecipeContents>  
        
    );
  }
}

export default RecipePreview;

