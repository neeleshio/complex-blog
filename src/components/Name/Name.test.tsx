import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Name from '.';

describe('Name component', () => {
    test('should render h1 and span elements', () => {
        render(<Name />);

        const heading = screen.getByRole('heading');
        const span = screen.getByLabelText('designation');

        expect(heading).toBeInTheDocument();
        expect(span).toBeInTheDocument();
    });

    test('should render h1 and span textcontent correctly', () => {
        render(<Name />);

        const heading = screen.getByRole('heading');
        const span = screen.getByLabelText('designation');

        expect(heading.textContent).toBe(`Hi 👋🏻, I'm Neelesh.`);
        expect(span.textContent).toBe(`A Frontend Software Development Engineer.`);
    });
});
