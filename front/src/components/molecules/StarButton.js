import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import EmptyStar from '../atoms/EmptyStar.svg';
// import Star from '../atoms/Star.svg';


const StarredButton = styled.button`
  height: 20px;
  align-self: center; 
  }
`;

const FilledStar = styled.div`
  background: red;
  `
const Star = styled.div`
background: green;
`

class StarButton extends Component {

  static defaultProps = {
		starred: false, 
	}

  static propTypes = {
    starOnChange: PropTypes.func,
    starred: PropTypes.bool
    // className: PropTypes.string.isRequired,
  }

  render() {
    return (
      <StarredButton onClick={this.props.starOnChange}>
        {(this.props.starred) ? 
          (<FilledStar alt='favorite Recipe'/>):
          (<Star alt='not a favorite Recipe'/>)
        }
      </StarredButton>

    );
  }
}

export default StarButton;

