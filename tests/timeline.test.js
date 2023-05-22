/* globals describe, expect , test*/
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Timeline from '../components/timeline';

describe('HeaderBG component', () => {
    test('renders header text', () => {
        const { getByText } = render(<Timeline />);
        const titleElement = getByText(/BLUE IBEX DAO./i);
        const subtitleElement = getByText(/DEFi For Everyone!/i);
        expect(titleElement).toBeInTheDocument();
        expect(subtitleElement).toBeInTheDocument();
    });

    test('renders with expected styles', () => {
        const { container } = render(<Timeline />);
        expect(container.firstChild).toHaveClass('h-screen flex bg-gradient-cus');
    });
});
