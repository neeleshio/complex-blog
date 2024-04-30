'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/src/store';
import { Footer, Header } from '@/src/containers';
import AllBlogs from '../containers/AllBlogs';

export default function AllBlogsPage() {
    return (
        <Provider store={store}>
            <Header />
            <main>
                <AllBlogs />
            </main>
            <Footer />
        </Provider>
    );
}
