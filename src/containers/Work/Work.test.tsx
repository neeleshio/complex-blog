import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Work from '.';

describe('Work Section', () => {
    test('should exactly have 4 cards', () => {
        render(<Work />);

        const workCards = screen.getAllByLabelText('work-card');
        expect(workCards).toHaveLength(4);
    });
});
