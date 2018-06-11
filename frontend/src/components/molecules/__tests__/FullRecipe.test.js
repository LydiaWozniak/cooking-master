import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
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

describe('<FullRecipe />', () => {
  it('should match default snapshot', () => {
    const tree = renderer.create(
      <FullRecipe
        name={recipe.name} 
        cookingTime={recipe.cookingTime}
        ingredients={recipe.ingredients} 
        image={recipe.image}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});