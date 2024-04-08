'use client';

import { Provider } from 'react-redux';
import { store } from '../store';
import Skills from '../containers/Skills';
import Intro from '../containers/Intro';
import Work from '../containers/Work';
import Projects from '../containers/Projects';
import Blog from '../containers/Blog';
import QuickLinks from '../containers/QuickLinks';
import Header from '../containers/Header';
import Footer from '../containers/Footer';

export default function Home() {
    return (
        <Provider store={store}>
            <Header />
            <div>
                <Intro />
                <Skills />
                <Work />
                <Projects />
                <Blog />
                <QuickLinks />
                <Footer />
            </div>
        </Provider>
    );
}
