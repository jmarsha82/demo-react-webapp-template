import { render, screen } from '@testing-library/react';
import App from './App';

test('renders new blog link', () => {
  render(<App />);
  const linkElement = screen.getByText(/New Blog/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders home link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Homepage/i);
  expect(linkElement).toBeInTheDocument();
});
