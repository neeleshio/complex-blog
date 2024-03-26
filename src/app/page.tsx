'use client';

import Footer from '../containers/Footer';
import Blog from '../containers/Sections/Blog';
import Ecosystem from '../containers/Sections/Ecosystem';
import Experience from '../containers/Sections/Experience';
import Intro from '../containers/Sections/Intro';
import Projects from '../containers/Sections/Projects';
import { StyledHome } from './styles';

export default function Home() {
    return (
        <StyledHome>
            <Intro />
            <Ecosystem />
            <Experience />
            <Projects />
            <Blog />
            <Footer />
        </StyledHome>
    );
}
