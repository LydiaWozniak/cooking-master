import React, { Component } from 'react';
import styled from 'styled-components';
import emptystar from '../atoms/EmptyStar.svg';

const RecipeContents = styled.div`
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

const Image = styled.div`
    background: #F65642;
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

class Preview extends Component {
  render() {
    return (
        <RecipeContents>
            <List>
                <li>Recipe Title</li>
                <li>Main Ingredients </li>
                <li>Cooking Time </li>
            </List>   
            <Image>
            </Image>  
            <Starred src={emptystar} alt="starred"/>

        </RecipeContents>  
        
    );
  }
}

export default Preview;