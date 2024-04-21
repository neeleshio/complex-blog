import React from 'react';

type SectionHeadingProps = {
    title: string;
    subtitle: string;
};

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
    return (
        <div className="text-[2.8rem] sm:text-[2.4rem] font-semibold px-56 xl:px-28 lg:px-14 sm:px-7">
            <h2 className="inline text-[2.8rem] sm:text-[2.4rem] font-semibold">{title}</h2>
            <span className="text-cgrey pl-2">{subtitle}</span>
        </div>
    );
};

export default SectionHeading;
