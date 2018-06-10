import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Page from '../Page';

describe('<Page />', () => {
  it('should match default snapshot', () => {
    const tree = renderer.create(<Page />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

