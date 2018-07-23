import React from 'react';
import renderer from 'react-test-renderer';
import Newsfeed from '../Newsfeed';
// import { shallow } from 'enzyme';
// import sinon from 'sinon';

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
    const tree = renderer.create(<Newsfeed search="Chicken Breasts" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot when filtering by All recipes', () => {
    const tree = renderer.create(<Newsfeed filter="all" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot when filtering by starred recipes', () => {
    const tree = renderer.create(<Newsfeed filter="starred" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});