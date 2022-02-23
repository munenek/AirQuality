import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders without crashing', () => {
  const title = 'My footer';
  const description = 'My footer description';
  render(<Footer title={title} description={description} />);
  const titleElem = screen.getByText(title);
  const descriptionElem = screen.getByText(description);
  expect(titleElem).toBeInTheDocument();
  expect(descriptionElem).toBeInTheDocument();
});
