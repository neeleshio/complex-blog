import renderWithProviders from '@/utils/utils-for-tests';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import HomePage from '.';

test('Render home header on homepage', () => {
    renderWithProviders(<HomePage />);

    const homeHeader = screen.getByLabelText(/header-home/i);

    expect(homeHeader).toBeInTheDocument();
});

test('Donot render blog header on homepage', () => {
    renderWithProviders(<HomePage />);

    const blogHeader = screen.queryByLabelText(/header-blog/i);

    expect(blogHeader).not.toBeInTheDocument();
});
