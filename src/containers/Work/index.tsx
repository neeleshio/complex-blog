import WorkCard from '@/src/components/WorkCard';
import { WORK_HISTORY } from '@/src/data';
import React from 'react';

function Work() {
    return (
        <div className="px-56">
            <div className="text-[2.8rem] font-semibold">
                <h2 className="inline text-[2.8rem] font-semibold">Work history.</h2>
                <span className="text-[#6e6e73] pl-2">
                    Current and previous companies I worked for.
                </span>
            </div>
            <div className="flex pt-16">
                {WORK_HISTORY.map((el) => (
                    <WorkCard {...el} />
                ))}
            </div>
        </div>
    );
}

export default Work;
