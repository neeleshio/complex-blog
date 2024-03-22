'use client';

import Background from '../components/Background';
import Intro from '../containers/Sections/Intro';
import { StyledHome } from './styles';

export default function Home() {
    return (
        <StyledHome>
            <Background />
            <Intro />
        </StyledHome>
    );
}
