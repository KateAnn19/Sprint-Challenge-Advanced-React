import React from 'react';
import {render, fireEvent, toBeInTheDocument} from '@testing-library/react';
import { PlayerCard } from './playerCard';
import {BrowserRouter as Router} from 'react-router-dom';



  test('renders main page', () => {
    const {getByText} =  render(
      <Router>
        <PlayerCard/>
      </Router>
    );
    getByText(/List Below/i);
    
  })