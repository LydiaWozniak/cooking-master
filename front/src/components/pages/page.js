import React, { Component } from 'react';
import styled from 'styled-components';
import { Header, Nav, Newsfeed } from '../organisms';

const Main = styled.div`
  background: #FFFFFF; 
  display: flex;
  flex-direction: column; 
`;

class Page extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//         value : ''
//     };

//     this.value = this.value.bind(this);
// }

  state = {
    value: ''
  };

  handleChange = (event) => {
  this.setState({value: event.target.value});
}

  handleSubmit = (event) => {
  console.log('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

  render() {
    return (
      <Main>
        <Header/> 
        <Nav 
        onSubmit={this.handleSubmit}
        value={this.state.value} 
        onChange={this.handleChange}
        /> 
        <Newsfeed />
      </Main>
    );
  }
}

export default Page; 