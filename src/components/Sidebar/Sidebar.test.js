import { render } from '@testing-library/react';
import Sidebar from './Sidebar';

test('renders without crashing', () => {
  render(
    <Sidebar
      description=""
      social={[]}
      title=""
      subDescription=""
      subTitle=""
      data={{}}
    />
  );
});
