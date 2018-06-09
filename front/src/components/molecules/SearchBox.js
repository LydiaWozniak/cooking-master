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
    onChange: PropTypes.func.isRequired,
  }

  state = {
    search: ''
  };

  handleSubmit = (event) => {
    this.props.onChange(this.state.search);
    event.preventDefault(); 

  }

  handleChange = (event) => {
    this.setState({search: event.target.value});
  }

  render() {
    return (
      <Search onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} placeholder="Ingredient, Recipe Name"/>
        <input type="submit" value="Submit"/>
      </Search>  
    );
  }
}

export default SearchBox;