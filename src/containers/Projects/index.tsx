import Image from 'next/image';
import React from 'react';
import chattodopic from '@/assets/images/png/chattodopic.png';
import ProjectCard from '@/src/components/ProjectCard';
import { PROJECTS } from '@/src/data';
import CustomScroll from '@/src/components/CustomScroll';
import useOpenLink from '@/src/hooks/useOpenLink';
import SectionHeading from '@/src/components/SectionHeading';

const Projects = () => {
    const { navigate } = useOpenLink();

    return (
        <div className="pt-[5.4rem] proj-scroll">
            <SectionHeading
                title="Featured Projects."
                subtitle="Current and previous companies I worked for."
            />
            <CustomScroll height={40}>
                {PROJECTS.map((el) => (
                    <ProjectCard {...el} navigate={navigate} />
                ))}
            </CustomScroll>
        </div>
    );
};

export default Projects;
