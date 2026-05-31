import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders developer name', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Aman Gupta/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
