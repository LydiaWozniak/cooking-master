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
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
  } 

  render() {
    return (
      <Search onSubmit={this.props.onSubmit}>
        <input type="text" value={this.props.value} onChange={this.props.onChange} placeholder="Ingredient, Recipe Name"/>
        <input type="submit" value="Submit"/>
      </Search>  
    );
  }
}

export default SearchBox;