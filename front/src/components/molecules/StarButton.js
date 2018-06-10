import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EmptyStar from '../atoms/EmptyStar.svg';
import Star from '../atoms/Star.svg';


const StarredButton = styled.button`
  align-self: center;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const FilledStar = styled.img`
  height: 20px;
  &:hover{
    transform: scale(1.5);
  `
const EmptyStarButton = styled.img`
  height: 20px;
  &:hover{
    background: url(${Star});
    transform: scale(1.5);
  }
`

class StarButton extends Component {

  static defaultProps = {
		starred: false, 
	}

  static propTypes = {
    starOnChange: PropTypes.func,
    starred: PropTypes.bool, 
  }

  render() {
    return (
      <StarredButton onClick={this.props.starOnChange}>
        {(this.props.starred) ? 
          (<FilledStar src={Star} alt='favorite Recipe'/>):
          (<EmptyStarButton src={EmptyStar} alt='not a favorite Recipe'/>)
        }
      </StarredButton>

    );
  } 
}

export default StarButton;

