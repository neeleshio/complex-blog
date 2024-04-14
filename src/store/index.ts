import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './slices/themeSlice';
import navSlice from './slices/navSlice';
import blogSlice from './slices/blogSlice';

export const store = configureStore({
    reducer: {
        themeSlice,
        navSlice,
        blogSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
