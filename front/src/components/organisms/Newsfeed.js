import React, { Component } from 'react';
import styled from 'styled-components';
import Preview from '../molecules/Preview.js'; 


const Container = styled.div`
    background: #FFFFFF; 
    border: 2px solid #635155;
    border-radius: 5px; 
    width: 100%; 
`;



export default class Newsfeed extends Component {
  render() {
    return (
        <div>
            <Container>
                <Preview />
                <Preview />
                <Preview />
            </Container>    
        </div>
    )
  }
}