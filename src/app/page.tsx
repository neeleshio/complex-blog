'use client';

import { Provider } from 'react-redux';
import { store } from '../store';
import Skills from '../containers/Skills';
import Intro from '../containers/Intro';
import Work from '../containers/Work';
import Projects from '../containers/Projects';
import Blog from '../containers/Blog';

export default function Home() {
    return (
        <Provider store={store}>
            <div>
                <Intro />
                <Skills />
                <Work />
                <Projects />
                <Blog />
            </div>
        </Provider>
    );
}
