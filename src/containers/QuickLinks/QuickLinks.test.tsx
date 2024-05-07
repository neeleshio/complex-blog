import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import QuickLinks from '.';

describe('QuickLinks Component', () => {
    test('should render h1 with correct heading', () => {
        render(<QuickLinks />);

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe(`Quick Links`);
    });

    test('should exactly have 3 links', () => {
        render(<QuickLinks />);
        const links = screen.getAllByRole('listitem');
        expect(links).toHaveLength(3);
    });
});
