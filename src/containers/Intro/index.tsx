import Name from '@/src/components/Name';
import Socials from '@/src/components/Socials';
import { SOCIALS } from '@/src/data';
import React from 'react';

const Intro = () => {
    return (
        <section className="mx-56 py-28 flex justify-between items-center flex-wrap xl:mx-28 lg:gap-8 lg:pb-14 lg:mx-14 sm:mx-7 sm:pt-20 sm:pb-10">
            <Name />
            <Socials SOCIALS={SOCIALS} />
        </section>
    );
};

export default Intro;
