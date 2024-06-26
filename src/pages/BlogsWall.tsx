'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/src/store';
import { Blogs, Footer, Header } from '@/src/containers';
import SectionHeader from '@/src/components/SectionHeader';

export default function BlogsWall() {
    return (
        <Provider store={store}>
            <Header page="blog" />
            <SectionHeader title="Blog Wall" />
            <main>
                <Blogs />
            </main>
            <Footer />
        </Provider>
    );
}
