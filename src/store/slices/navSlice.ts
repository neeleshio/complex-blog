import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type navState = {
    open: boolean;
    target: string;
    mobileNavOpen: boolean;
};

const initialState: navState = {
    open: false,
    target: '',
    mobileNavOpen: false
};

const navSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        handleOpenNavMenu(state, { payload }) {
            const { target, action } = payload;
            state.open = action;
            state.target = target;
        },
        handleOpenMobileNav(state, { payload }) {
            state.mobileNavOpen = payload;
        }
    }
});

export const { handleOpenNavMenu, handleOpenMobileNav } = navSlice.actions;

export const navSelector = (state: RootState) => state.navSlice;

export default navSlice.reducer;
