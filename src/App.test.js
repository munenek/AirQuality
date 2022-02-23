import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the cigarette magazine', () => {
  render(<App />);
  const title = screen.getByText(/the cigarette magazine/i);
  expect(title).toBeInTheDocument();
});
