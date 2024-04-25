import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import Name from '.';

// describe('test', () => {
test('render the Ribbon component', () => {
    render(<Name />);
    const heading = screen.getByRole('heading', { level: 1 });

    // expect(heading).toBe
});
// });
