/* globals describe, expect , test*/
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import HeaderBG from '../components/header_bg';

describe('HeaderBG component', () => {
  test('renders header text', () => {
    const { getByText } = render(<HeaderBG />);
    const titleElement = getByText(/BLUE IBEX DAO./i);
    const subtitleElement = getByText(/DEFi For Everyone!/i);
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  test('renders with expected styles', () => {
    const { container } = render(<HeaderBG />);
    expect(container.firstChild).toHaveClass('h-screen flex bg-gradient-cus');
  });
});
