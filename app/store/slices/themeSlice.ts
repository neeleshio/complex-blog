import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface ThemeState {
    dark: boolean;
}

const initialState: ThemeState = {
    dark: true
};

type actionPayload = {
    payload: boolean;
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        handleToggleTheme(state, { payload }: actionPayload) {
            state.dark = payload;
        }
    }
});

export const { handleToggleTheme } = themeSlice.actions;

export const themeSelector = (state: RootState) => state.themeSlice;

export default themeSlice.reducer;
