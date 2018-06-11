import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

describe('<Footer />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer name="Percy" />, div);
  });

  it('should match default snapshot', () => {
    const tree = renderer.create(
      <Footer />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});