import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';
import chatbotpic from '@/assets/images/png/chatbotpic.png';
import chattodopic from '@/assets/images/png/chattodopic.png';
import ProjectCard from '@/src/components/ProjectCard';
import { PROJECTS } from '@/src/data';
import OneItemScroll from './Scroll';
import Arrow from '@/assets/images/svg/Arrow';
import MainSingleCard from '@/src/components/ProjectCard/MainSingleCard';

const Projects = () => {
    const [scrollPosition, setScrollPosition] = useState({ scrollTop: 0, scrollLeft: 0 });
    const scrollDemoRef = useRef(null);

    const handleScroll = () => {
        if (scrollDemoRef.current) {
            let { scrollTop, scrollLeft } = scrollDemoRef.current;
            setScrollPosition({ scrollTop, scrollLeft });

            scrollDemoRef.current.scrollLeft = scrollDemoRef.current.scrollLeft + 400;
        }
    };

    return (
        <div className="pt-[8rem] proj-scroll">
            {/* heading */}
            <div className="text-[2.8rem] font-semibold px-56">
                <h2 className="inline text-[2.8rem] font-semibold">Featured Projects.</h2>
                <span className="text-[#6e6e73] pl-2">
                    Current and previous companies I worked for.
                </span>
            </div>

            {/* project cards */}
            <div className="relative">
                <div
                    className="flex pt-16 pb-16 overflow-x-auto overflow-y-hidden w-screen"
                    ref={scrollDemoRef}>
                    <div className="min-w-[14rem] h-[40rem]"></div>

                    <MainSingleCard chattodopic={chattodopic} />

                    {PROJECTS.map((el) => (
                        <ProjectCard {...el} />
                    ))}

                    <div className="min-w-[14rem] h-[40rem]"></div>
                </div>

                <div>
                    <div className="absolute top-[42.5%] left-8 transform rotate-[180deg]">
                        <button
                            onClick={handleScroll}
                            className="bg-[#d2d2d7a3] rounded-full border-0 w-20 h-20 opacity-80 flex justify-center items-center">
                            {/* <Arrow /> */}
                        </button>
                    </div>
                    <div className="absolute top-[42.5%] right-8">
                        <button
                            onClick={handleScroll}
                            className="bg-[#d2d2d7a3] rounded-full border-0 w-20 h-20 opacity-80 flex justify-center items-center">
                            <Arrow />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
