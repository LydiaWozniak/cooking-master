import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import emptystar from '../atoms/EmptyStar.svg';

class FullRecipe extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    cookingTime: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.shape({
      quantity: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      name: PropTypes.string.isRequired
    })).isRequired,
    image: PropTypes.string.isRequired
  }

  render() {
    return (
      <article>
          <h1>{this.props.name}</h1>
          <h3>{this.cookingTime}</h3> 
          <ul>
            <li>{this.props.ingredients.join(', ')}</li>
          </ul> 
        <img src={this.props.image} alt={`Image of ${this.props.name}`}/> 
        <img src={emptystar} alt="starred"/>
      </article>  
        
    );
  }
}

export default FullRecipe;