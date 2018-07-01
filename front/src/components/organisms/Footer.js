import React, { Component } from 'react';
// import styled from 'styled-components';

const endFooterStyling = {
background: '#635155',
padding: '2%',
display: 'flex',
justifyContent: 'center',
color: 'white', 
}

export default class Footer extends Component {
  render() {
    return (
      <footer style={endFooterStyling} >
      Made by {this.props.name}
      </footer> 
    )
  }
}
