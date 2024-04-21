'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/src/store';
import { Blogs, Footer, Header } from '@/src/containers';
import SectionHeader from '@/src/components/SectionHeader';

export default function BlogsWall() {
    return (
        <Provider store={store}>
            <Header />
            <SectionHeader title="Blog Wall" />
            <div>
                <Blogs />
            </div>
            <Footer />
        </Provider>
    );
}
