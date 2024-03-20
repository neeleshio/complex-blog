'use client';

import { ThemeProvider } from 'styled-components';
import themeSlice from './store/slices/themeSlice';
import { useAppSelector } from './hooks';
import { darkTheme, lightTheme } from './theme';
import Header from './containers/Headers';
import Footer from './components/Footer';
import { handleToggleTheme } from './store/slices/themeSlice';

export default function Home() {
    const { dark } = useAppSelector((state) => state.themeSlice);

    return (
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
            <Header />
            <Footer handleToggleTheme={handleToggleTheme} dark={dark} />
        </ThemeProvider>
    );
}
