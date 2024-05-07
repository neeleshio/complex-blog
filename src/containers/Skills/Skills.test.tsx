import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Skills from '.';
import renderWithProviders from '@/utils/utils-for-tests';

describe('Work Section', () => {
    test('should exactly have 14 cards', () => {
        renderWithProviders(<Skills />);

        const skillCards = screen.getAllByLabelText('skill-card');
        expect(skillCards).toHaveLength(14);
    });
});
