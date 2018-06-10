import React, { Component } from 'react';
import styled, {  keyframes } from 'styled-components';

const Main = styled.header`
  background: #D3D0C9; 
  color: #FFFF; 
  height: 10%; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  font-size: 3em; 
`;

const wiggle = keyframes`
  0% {transform: rotate(10deg);}
  25% {transform: rotate(-10deg);}
  50% {transform: rotate(20deg);}
  75% {transform: rotate(-5deg);}
  100% {transform: rotate(0deg);}
`;
const WiggleEffect = styled.div`
  display: inline-block; 
   &:hover {
     animation: ${wiggle} 1s linear infinite; 
     transform-origin: 50% 50%
   }
`;

export default class Header extends Component {
  render() {
    return (
      <Main>
          <h1>Cooking Master
            <WiggleEffect>
              <span role='img' aria-label='chef'>👩🏻‍🍳</span>
            </WiggleEffect> 
          </h1> 
      </Main>    
    )
  }
}

