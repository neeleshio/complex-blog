import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type blogState = {
    blogs: [];
};

const initialState: blogState = {
    blogs: []
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        handleStoreBlogs(state, { payload }) {
            state.blogs = payload;
        }
    }
});

export const { handleStoreBlogs } = blogSlice.actions;

export const blogSelector = (state: RootState) => state.blogSlice;

export default blogSlice.reducer;
