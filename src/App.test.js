import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Sudoku title', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /react sudoku/i })).toBeInTheDocument();
});
