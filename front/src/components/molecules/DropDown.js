import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Menu = styled.select`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center; 
`


class DropDown extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  state = {
    search: ''
  };

  handleOptionChange = () => {
    this.props.onChange(this.state.search)
  }

  handleOptionSelect = (event) => {
    const option = event.target.value;
    console.log(option)
    if (this.state.search !== option) {this.setState({search: option}, () => this.handleOptionChange())};
  }

  render() {
    return (
      <Menu onChange={this.handleOptionSelect}>
        <option value="Mushroom">Mushroom</option> 
        <option value="Chicken">Chicken</option> 
        <option value="Beef">Beef</option> 
      </Menu>  
    );
  }
}

export default DropDown;