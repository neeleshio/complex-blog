'use client';

import { ThemeProvider } from 'styled-components';
import { useAppSelector } from '../hooks';
import { darkTheme, lightTheme } from '../theme';

export const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { dark } = useAppSelector((state) => state.themeSlice);

    return <ThemeProvider theme={dark ? darkTheme : lightTheme}>{children}</ThemeProvider>;
};
