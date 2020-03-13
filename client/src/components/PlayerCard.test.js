import React from 'react';
import {render, fireEvent, toBeInTheDocument} from '@testing-library/react';
import { PlayerCard } from './playerCard';
import {BrowserRouter as Router} from 'react-router-dom';



  test('renders heading from page', () => {
    const {getByText} =  render(
      <Router>
        <PlayerCard/>
      </Router>
    );
    getByText(/List Below/i);
    
  })

  test('button is present and working', () => {
      const {getByText} = render(<Router><PlayerCard/></Router>)

      const backButton = getByText(/players/i);

      fireEvent.click(backButton);
  })