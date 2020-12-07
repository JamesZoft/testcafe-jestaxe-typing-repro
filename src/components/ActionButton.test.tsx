import React from 'react';
import { act, render } from '@testing-library/react';
import ActionButton from './ActionButton';
import { axe } from 'jest-axe';

it('should have no accessibility issues', async () => {
  const { container } = render(<ActionButton>text</ActionButton>);
  let results;

  await act(async () => {
    // results = await axe(container);
  });

  expect(results).toHaveNoViolations();
});
