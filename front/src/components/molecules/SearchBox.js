import React, { Component } from 'react';
import styled from 'styled-components';

const Search = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center; 
`
class SearchBox extends Component {
  render() {
    return (
      <Search>
        <input type="text" class="search" placeholder="Ingredient, Titles"/>
        <input type="submit" value="🔎"/>
      </Search>  
    );
  }
}

export default SearchBox;