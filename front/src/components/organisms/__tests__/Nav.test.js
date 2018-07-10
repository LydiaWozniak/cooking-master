import React from 'react';
import ReactDOM from 'react-dom';
import toJSON from 'enzyme-to-json'; 

import Nav from '../Nav';
import { shallow, mount, render } from 'enzyme';


describe('Nav', () => {
  it('takes props without crashing', () => {
    const wrapper = shallow(<Nav 
        filtersOnChange={() => null}
        searchOnChange={() => null}
    />);
  })
} )


