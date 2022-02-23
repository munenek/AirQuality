import { render } from '@testing-library/react';
import Main from './Main';

test('renders without crashing', () => {
  const posts = ['post one', 'post two'];
  render(<Main posts={posts} />);
});
