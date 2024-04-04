import Name from '@/src/components/Name';
import Socials from '@/src/components/Socials';
import { SOCIALS } from '@/src/data';
import React from 'react';

const Intro = () => {
    return (
        <div className="px-56 py-32 flex justify-between items-center flex-wrap">
            <Name />
            <Socials SOCIALS={SOCIALS} />
        </div>
    );
};

export default Intro;
