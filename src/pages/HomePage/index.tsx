'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/src/store';
import {
    Articles,
    Footer,
    Header,
    Intro,
    Projects,
    QuickLinks,
    Skills,
    Work
} from '@/src/containers';
import Ribbon from '@/src/containers/Ribbon';

export default function HomePage() {
    return (
        <Provider store={store}>
            <Header page="home" />
            <Ribbon />
            <main>
                <Intro />
                <Skills />
                <Work />
                <Projects />
                <Articles />
                <QuickLinks />
            </main>
            <Footer />
        </Provider>
    );
}
