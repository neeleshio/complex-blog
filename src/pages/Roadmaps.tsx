'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/src/store';
import { Roadmaps, Footer, Header } from '@/src/containers';
import SectionHeader from '@/src/components/SectionHeader';

export default function RoadmapsPage() {
    return (
        <Provider store={store}>
            <Header page="blog" />
            <SectionHeader title="Roadmaps" />
            <main>
                <Roadmaps />
            </main>
            <Footer />
        </Provider>
    );
}
