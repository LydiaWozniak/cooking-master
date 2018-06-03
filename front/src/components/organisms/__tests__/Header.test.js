import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from '../Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});