import React from 'react';
import renderer from 'react-test-renderer';
import Newsfeed from '../Newsfeed';

describe('<Newsfeed />', () => {
  it('should match default snapshot', () => {
    const tree = renderer.create(<Newsfeed />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot when filtering by full recipe name', () => {
    const tree = renderer.create(<Newsfeed search="Beef Stroganoff" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot when filtering by match of recipe name', () => {
    const tree = renderer.create(<Newsfeed search="Strogan" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot when filtering by mainIngredient of recipe', () => {
    const tree = renderer.create(<Newsfeed search="Mushrooms" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot when filtering by an ingredient name', () => {
    const tree = renderer.create(<Newsfeed search="Breasts" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});