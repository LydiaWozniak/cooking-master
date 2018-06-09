import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Filters from '../molecules/Filters.js'; 
import SearchBox from '../molecules/SearchBox.js'

const NavBar = styled.nav`
  background: #D3D0C9; 
  display: flex;
  flex-direction: row; 
  justify-content: space-around; 
  align-items: center; 

`;

export default class Nav extends Component {

  static propTypes = {
    filtersOnChange: PropTypes.func.isRequired,
    searchOnChange: PropTypes.func.isRequired,
  }

  render() {
    return (
      <NavBar>
        <Filters onChange={this.props.filtersOnChange} />
        <SearchBox onChange={this.props.searchOnChange} /> 
      </NavBar>   
    )
  }
}
