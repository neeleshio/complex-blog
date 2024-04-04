import Image, { StaticImageData } from 'next/image';
import React from 'react';

type WorkCardProps = {
    company: string;
    designation: string;
    timeline: string;
    projects: string[];
    image: StaticImageData;
    latest: boolean;
};

const WorkCard = ({ company, designation, timeline, image, latest }: WorkCardProps) => {
    return (
        <div className="rounded-[18px] shadow-[2px_4px_12px_#00000014] relative mr-8 hover:shadow-[2px_4px_16px_#00000029] cursor-pointer custom-transform">
            <div className="h-[50rem]">
                <Image
                    src={image}
                    width={400}
                    height={500}
                    className="rounded-[18px] object-cover"
                />
            </div>
            <div className="absolute top-0 flex flex-col p-12">
                {latest ? (
                    <>
                        <span className="text-[#6e6e73] uppercase text-[1.2rem] pb-5 font-semibold">
                            {designation}
                        </span>
                        <span className="text-[2.5rem] font-semibold">{company}</span>
                        <span className="pt-4 text-[1.3rem] font-light">{timeline}</span>
                    </>
                ) : (
                    <>
                        <span className="text-[#f5f5f7] uppercase text-[1.2rem] pb-5 font-semibold">
                            {designation}
                        </span>
                        <span className="text-[2.5rem] text-[#ffffff] font-semibold">
                            {company}
                        </span>
                        <span className="pt-4 text-[1.3rem] text-[#ffffff] font-light">
                            {timeline}
                        </span>
                    </>
                )}
            </div>
        </div>
    );
};

export default WorkCard;
