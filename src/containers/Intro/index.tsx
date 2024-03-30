import Name from '@/src/components/Name';
import Socials from '@/src/components/Socials';
import React from 'react';
import { SOCIALS } from '@/src/data';

const Intro = () => {
    return (
        <div className="px-10 py-32 flex flex-col justify-between flex-wrap md:px-28 lg:flex-row lg:items-center xl:px-56">
            <Name />
            <Socials SOCIALS={SOCIALS} />
        </div>
    );
};

export default Intro;
