import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EmptyStar from '../atoms/EmptyStar.svg';
import Star from '../atoms/Star.svg';


const StarredButton = styled.button`
  height: 20px;
  align-self: center; 
  }
`;


class StarButton extends Component {

  static propTypes = {
    starOnChange: PropTypes.func,
    starred: PropTypes.array.isRequired,
    // className: PropTypes.string.isRequired,
  }

  //PropTypes are prop definitions, default is what value it gets if not given
  static defaultProps = { 
    starred: []
  };

  render() {
    return (
      <StarredButton onClick={this.props.starOnChange}>
        {this.props.starred ? 
          (<img src={Star} alt='favorite Recipe'/>):
          (<img src={EmptyStar} alt='not a favorite Recipe'/>)
          } 
      </StarredButton>

    );
  }
}

export default StarButton;

