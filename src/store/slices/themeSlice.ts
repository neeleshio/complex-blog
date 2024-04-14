import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface ThemeState {
    dark: boolean;
}

const initialState: ThemeState = {
    dark: false
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        handleToggleTheme(state) {
            if (!state.dark) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
            state.dark = !state.dark;
        }
    }
});

export const { handleToggleTheme } = themeSlice.actions;

export const themeSelector = (state: RootState) => state.themeSlice;

export default themeSlice.reducer;
