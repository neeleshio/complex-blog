'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/src/store';
import { Blogs, Footer, Header } from '@/src/containers';
import SectionHeader from '@/src/components/SectionHeader';

export default function BlogsPage() {
    return (
        <Provider store={store}>
            <Header />
            <SectionHeader />
            <div>
                <Blogs />
            </div>
            <Footer />
        </Provider>
    );
}
