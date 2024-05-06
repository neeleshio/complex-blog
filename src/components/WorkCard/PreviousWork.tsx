import Image, { StaticImageData } from 'next/image';
import React from 'react';

type PreviousWorkCardProps = {
    company: string;
    designation: string;
    timeline: string;
    Img: StaticImageData;
    navigate: (link: string) => void;
    link: string;
};

const PreviousWork = ({
    company,
    designation,
    timeline,
    Img,
    link,
    navigate
}: PreviousWorkCardProps) => {
    return (
        <div
            className="rounded-[18px] shadow-[2px_4px_12px_#0071e314] relative mr-8 my-8 hover:shadow-[2px_4px_16px_#0071e324] cursor-pointer custom-transform min-w-[40rem] h-[50rem] sm:min-w-[35rem] sm:h-[45rem]"
            onClick={() => navigate(link)}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(link)}
            aria-label="work-card">
            <div className="flex flex-col h-full justify-between bg-black rounded-[18px] border-[#f5f5f72e] border border-solid">
                <div className="flex flex-col p-12">
                    <span className="text-[#f5f5f7] uppercase text-[1.2rem] pb-5 font-semibold">
                        {designation}
                    </span>
                    <span className="text-[2.5rem] text-[#ffffff] font-semibold sm:text-[2.1rem]">
                        {company}
                    </span>
                    <span className="pt-4 text-[1.3rem] text-[#ffffff] font-light">{timeline}</span>
                </div>
                <div className="text-center">
                    <Image
                        alt={`${company}'s logo`}
                        src={Img}
                        width={280}
                        height={280}
                        className="rounded-[18px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default PreviousWork;
