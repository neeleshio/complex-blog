import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import RootLayout from './layout';

test('dark className should not be present in the body', () => {
    render(
        <RootLayout>
            <div></div>
        </RootLayout>
    );

    const body = screen.getByLabelText('body');
    expect(body).not.toHaveClass('dark');
});
