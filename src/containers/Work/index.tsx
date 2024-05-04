import ButtonScroll from '@/src/components/CustomScroll';
import SectionHeading from '@/src/components/SectionHeading';
import WorkCard from '@/src/components/WorkCard';
import { WORK_HISTORY } from '@/src/data';
import useOpenLink from '@/src/hooks/useOpenLink';
import React from 'react';

const Work = () => {
    const { navigate } = useOpenLink();

    return (
        <section>
            <SectionHeading
                title="Work history."
                subtitle="Current and previous companies I worked for."
            />

            <div className="flex">
                <ButtonScroll height={50}>
                    {WORK_HISTORY.map((el) => (
                        <WorkCard {...el} navigate={navigate} key={el.id} />
                    ))}
                </ButtonScroll>
            </div>
        </section>
    );
};

export default Work;
