import React from 'react'
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import FORAM from '../pages/form'




describe('Simple working form', () => {

    it('Should render all form inputs', () => {
        const textToFind = "Connect Your Wallet"
        render(
            <FORAM />
        );

        const heading = screen.getByText(textToFind);

        expect(heading).toBeInTheDocument();
    });

});