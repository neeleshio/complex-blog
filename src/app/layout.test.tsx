import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import RootLayout from './layout';

describe('RootLayout', () => {
    test('dark className should not be present in the body tag', () => {
        render(
            <RootLayout>
                <div />
            </RootLayout>
        );

        const body = screen.getByLabelText('body');
        expect(body).not.toHaveClass('dark');
    });
});
