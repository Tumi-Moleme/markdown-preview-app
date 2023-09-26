import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

import App from './App';

test('renders Markdown Previewer title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Markdown Previewer/i);
  expect(titleElement).toBeInTheDocument();
});

test('updates preview when Markdown input changes', () => {
  render(<App />);
  const inputElement = screen.getByLabelText(/Markdown Input/i);
  const previewElement = screen.getByLabelText(/Preview/i);

  fireEvent.change(inputElement, { target: { value: '# Test Heading' } });

  expect(previewElement).toHaveTextContent('Test Heading');
});
