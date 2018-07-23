import React, { Component } from 'react';
import styled from 'styled-components';
import { Header, Nav, Newsfeed, Footer } from '../organisms';

const Main = styled.div`
  background: #FFFFFF; 
  display: flex;
  flex-direction: column; 
  font-family: 'Roboto', sans-serif;
`;

// const names = ['Lydia', 'Loopy', 'Lolly'];
// names[Math.floor(Math.random() * Math.floor(3))]

class Page extends Component {

  state = {
    filter: 'all', 
    search: ''
  }

  handleFiltersOnChange = (filter) => {
    this.setState({filter})
    this.setState({search : ''})
  }

  handleSearchOnChange = (search) => {
    this.setState({search})
    this.setState({filter : 'all'})
  }


  render() {
    return (
      <Main>
        <Header/> 
        <Nav 
          filtersOnChange={this.handleFiltersOnChange}
          searchOnChange={this.handleSearchOnChange}
          dropDownSelect={this.handleSearchOnChange}
        /> 
        <Newsfeed 
          filter={this.state.filter}
          search={this.state.search}
        />
        <Footer
          name='lydia'
        />
      </Main>
    );
  }
}

export default Page; 