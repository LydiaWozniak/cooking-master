import React from 'react';
import Nav from '../Nav';
import { shallow } from 'enzyme';


describe('Nav', () => {
  it('takes props without crashing', () => {
    const wrapper = shallow(<Nav 
        filtersOnChange={() => null}
        dropDownSelect={()=> null}
        searchOnChange={() => null}
    />);
    const inst = wrapper.instance();
    expect(inst).toBeInstanceOf(Nav);
  })
} )


