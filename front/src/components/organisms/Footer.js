import React, { Component } from 'react';
import styled from 'styled-components';

const EndFooter = styled.footer`
background: #635155;
padding: 2%;
display: flex;
justify-content: center; 
color: white; 
`;

export default class Footer extends Component {
  render() {
    return (
      <EndFooter>
      Made by {this.props.name}
      </EndFooter> 
    )
  }
}
