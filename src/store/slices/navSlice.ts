import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type navState = {
    open: boolean;
    target: string;
};

const initialState: navState = {
    open: false,
    target: ''
};

const navSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        handleOpenNavMenu(state, { payload }) {
            const { target, action } = payload;
            state.open = action;
            state.target = target;
        }
    }
});

export const { handleOpenNavMenu } = navSlice.actions;

export const navSelector = (state: RootState) => state.navSlice;

export default navSlice.reducer;
