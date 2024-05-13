import React from 'react';
import ProjectCard from '@/src/components/ProjectCard';
import { PROJECTS } from '@/src/data';
import CustomScroll from '@/src/components/CustomScroll';
import useOpenLink from '@/src/hooks/useOpenLink';
import SectionHeading from '@/src/components/SectionHeading';

const Projects = () => {
    const { navigate } = useOpenLink();

    return (
        <section className="pt-[5.4rem] proj-scroll">
            <SectionHeading
                title="Featured Projects."
                subtitle="Some of my personal projects I worked on."
            />
            <CustomScroll height={40}>
                {PROJECTS.map((el) => (
                    <ProjectCard {...el} navigate={navigate} />
                ))}
            </CustomScroll>
        </section>
    );
};

export default Projects;
