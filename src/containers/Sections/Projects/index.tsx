import React from 'react';
import { StyledProjects } from './styles';
import { PROJECTS } from '@/src/data';
import Slide from '@/src/components/Slide';
import FirstSlide from '@/src/components/FirstSlide';

const Projects = () => {
    return (
        <StyledProjects id="projects">
            <div className="pb-32">
                <div className="slide-container">
                    <FirstSlide />
                    {PROJECTS.map((el) => (
                        <Slide {...el} />
                    ))}
                </div>
            </div>
        </StyledProjects>
    );
};

export default Projects;
