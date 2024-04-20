import ButtonScroll from '@/src/components/CustomScroll';
import WorkCard from '@/src/components/WorkCard';
import { WORK_HISTORY } from '@/src/data';
import useOpenLink from '@/src/hooks/useOpenLink';
import React from 'react';

function Work() {
    const { navigate } = useOpenLink();

    return (
        <div>
            <div className="text-[2.8rem] sm:text-[2.4rem] font-semibold px-56 xl:px-28 lg:px-14 sm:px-7">
                <h2 className="inline text-[2.8rem] sm:text-[2.4rem] font-semibold">
                    Work history.
                </h2>
                <span className="text-cgrey pl-2">
                    Current and previous companies I worked for.
                </span>
            </div>
            <div className="flex">
                <ButtonScroll height={50}>
                    {WORK_HISTORY.map((el) => (
                        <WorkCard {...el} navigate={navigate} />
                    ))}
                </ButtonScroll>
            </div>
        </div>
    );
}

export default Work;
