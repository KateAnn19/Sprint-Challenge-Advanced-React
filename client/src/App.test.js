import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><App/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test('renders main page', () => {
//   const {getByText} =  render(
//     <Router>
//       <App/>
//     </Router>
//   );
//   const title = getByText(//i);
//   expect(title).toBeInTheDocument();
// })