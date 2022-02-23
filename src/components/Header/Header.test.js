import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

test('renders without crashing', () => {
  const sections = [{ title: 'English', url: '/en-us' }];
  render(
    <BrowserRouter>
      <Header sections={sections} title={'The cigarette magazine'} />
    </BrowserRouter>
  );
  const linkElem = screen.getByText(sections[0].title);
  expect(linkElem).toBeInTheDocument();
});
