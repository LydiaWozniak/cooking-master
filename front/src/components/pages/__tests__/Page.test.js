import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Page from '../Page';

describe('<Page />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Page />, div);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Page filter="starred"/>, div);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Page search=""/>, div);
  });

  it('should match default snapshot', () => {
    const tree = renderer.create(<Page />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match default snapshot', () => {
    const tree = renderer.create(<Page filter="starred" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match default snapshot', () => {
    const tree = renderer.create(<Page filter="all" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match default snapshot', () => {
    const tree = renderer.create(<Page search="lemon" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match default snapshot', () => {
    const tree = renderer.create(<Page search="" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

