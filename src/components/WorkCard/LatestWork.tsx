import Image, { StaticImageData } from 'next/image';
import React from 'react';

type LatestWorkCardProps = {
    company: string;
    designation: string;
    timeline: string;
    Img: StaticImageData;
    navigate: (link: string) => void;
    link: string;
};

const LatestWork = ({
    company,
    designation,
    timeline,
    Img,
    link,
    navigate
}: LatestWorkCardProps) => {
    return (
        <div
            className="rounded-[18px] shadow-[2px_4px_12px_#0071e314] relative mr-8 my-8 hover:shadow-[2px_4px_16px_#0071e324] cursor-pointer custom-transform min-w-[40rem] h-[50rem] sm:min-w-[35rem] sm:h-[45rem]"
            onClick={() => navigate(link)}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(link)}
            aria-label="work-card">
            <div className="flex flex-col h-full justify-between rounded-[18px] bg-white overflow-hidden">
                <div className="flex flex-col p-12">
                    <span className="text-[#6e6e73] uppercase text-[1.2rem] pb-5 font-semibold">
                        {designation}
                    </span>
                    <span className="text-[2.5rem] text-[#1d1d1f] font-semibold sm:text-[2.1rem]">
                        {company}
                    </span>
                    <span className="pt-4 text-[1.3rem] text-[#1d1d1f] font-light">{timeline}</span>
                </div>
                <div className="relative bottom-0 right-[20%]">
                    <Image
                        alt={`${company}'s logo`}
                        src={Img}
                        width={390}
                        height={280}
                        className="rounded-[18px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default LatestWork;
