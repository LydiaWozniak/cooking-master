import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Star from '../Star.svg';

describe('Star.svg', () => {
  it('should match default snapshot', () => {
    const tree = renderer.create(
      <img src={Star}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});