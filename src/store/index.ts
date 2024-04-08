import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './slices/themeSlice';
import navSlice from './slices/navSlice';

export const store = configureStore({
    reducer: {
        themeSlice,
        navSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
