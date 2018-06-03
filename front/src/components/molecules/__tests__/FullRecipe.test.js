import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import FullRecipe from '../FullRecipe';

const recipe = {
  name: "Lemon Cheese Cake",
  cookingTime: "40 minutes",
  ingredients: [
    {"quantity": 4, "name": "Eggs"},
    {"quantity": "1 cup", "name": "Cream Cheese"},
    {"quantity": 5, "name": "Lemon"}
  ],
  image: "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg", 
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <FullRecipe
      name={recipe.name} 
      ingredients={recipe.ingredients} 
      cookingTime={recipe.cookingTime}
      image={recipe.image}
    />
   , div);
});


