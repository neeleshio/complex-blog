import ButtonScroll from '@/src/components/CustomScroll';
import SectionHeading from '@/src/components/SectionHeading';
import WorkCard from '@/src/components/WorkCard';
import { WORK_HISTORY } from '@/src/data';
import useOpenLink from '@/src/hooks/useOpenLink';
import React from 'react';

function Work() {
    const { navigate } = useOpenLink();

    return (
        <div>
            <SectionHeading
                title="Work history."
                subtitle="Current and previous companies I worked for."
            />

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
