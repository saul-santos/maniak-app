import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('should render the app without errors', () => {
  const { getByText } = render(<App />);
  const homeText = getByText(/Home/i);

  expect(homeText).toBeInTheDocument()
});
