import React from 'react';
import Filters from '../Filters';
import { shallow } from 'enzyme';

describe('<Filters />', () => {
  it('simulates click events', () => {
    const onButtonClickFcn = jest.fn();
    const wrapper = shallow(
      <Filters 
      onChangeFilters={onButtonClickFcn}
       />);
    wrapper.find('[data-test-id="allBtn"]').simulate('click');
    expect(onButtonClickFcn).toHaveBeenCalled();
  });

  it('simulates click events', () => {
    const onButtonClickFcn = jest.fn();
    const wrapper = shallow(
      <Filters 
      onChangeFilters={onButtonClickFcn}
       />);
    wrapper.find('[data-test-id="starredBtn"]').simulate('click');
    expect(onButtonClickFcn).toHaveBeenCalled();
  });

});