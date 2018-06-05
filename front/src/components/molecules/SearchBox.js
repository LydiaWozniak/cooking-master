import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Search = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center; 
`


class SearchBox extends Component {

  static propTypes = {
    onClick: PropTypes.func
    // .isrequired
  } 
  render() {
    return (
      <Search>
        <input type="text" placeholder="Ingredient, Recipe Name"/>
        <input type="submit" value="🔎" onClick={this.props.onClick}/>
      </Search>  
    );
  }
}

export default SearchBox;