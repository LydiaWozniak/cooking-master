import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from '../Header';

describe('<Header />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });

  it('should match default snapshot', () => {
    const tree = renderer.create(
      <Header />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});