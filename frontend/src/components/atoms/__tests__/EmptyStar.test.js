import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import EmptyStar from '../EmptyStar.svg';

describe('Star.svg', () => {
  it('should match default snapshot', () => {
    const tree = renderer.create(
      <img src={EmptyStar}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});