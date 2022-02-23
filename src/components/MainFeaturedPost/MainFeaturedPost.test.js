import { render } from '@testing-library/react';
import MainFeaturedPost from './MainFeaturedPost';

test('renders without crashing', () => {
  const post = {
    description: '',
    image: '',
    imageText: '',
    title: '',
    date: '',
  };
  render(<MainFeaturedPost post={post} />);
});
