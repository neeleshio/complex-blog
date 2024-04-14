import Image from 'next/image';
import React from 'react';
import chattodopic from '@/assets/images/png/chattodopic.png';
import ProjectCard from '@/src/components/ProjectCard';
import { PROJECTS } from '@/src/data';
import CustomScroll from '@/src/components/CustomScroll';

const Projects = () => {
    return (
        <div className="pt-[5.4rem] proj-scroll">
            {/* heading */}
            <div className="text-[2.8rem] font-semibold px-56">
                <h2 className="inline text-[2.8rem] font-semibold">Featured Projects.</h2>
                <span className="text-cgrey pl-2">
                    Current and previous companies I worked for.
                </span>
            </div>

            <CustomScroll height={40}>
                {/* <div className="rounded-[18px] w-[40rem] h-[40rem] shadow-[2px_4px_12px_#00000014] relative mr-8 my-8 hover:shadow-[2px_4px_16px_#00000029] cursor-pointer custom-transform">
                    <Image
                        alt="projects-cover-pic"
                        src={chattodopic}
                        width={400}
                        height={400}
                        className="rounded-[18px] object-cover"
                    />
                    <div className="absolute top-0 flex flex-col p-12">
                        <span className="text-[2rem] font-normal">
                            The best method to acquire any skill is to put it into practice by
                            working on projects.
                        </span>
                    </div>
                </div> */}

                {/* list of projects */}
                {PROJECTS.map((el) => (
                    <ProjectCard {...el} />
                ))}
            </CustomScroll>
        </div>
    );
};

export default Projects;
