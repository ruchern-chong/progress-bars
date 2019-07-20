import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  test('should render', () => {
    const { container } = render(<ProgressBar />);

    expect(container).toMatchSnapshot();
  });
});
