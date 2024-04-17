import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

type WorkCardProps = {
    company: string;
    designation: string;
    timeline: string;
    projects: string[];
    image: any;
    latest: boolean;
};

const WorkCard = ({ company, designation, timeline, image: Img, latest }: WorkCardProps) => {
    return (
        <div className="rounded-[18px] shadow-[2px_4px_12px_#0071e314] relative mr-8 my-8 hover:shadow-[2px_4px_16px_#0071e324] cursor-pointer custom-transform min-w-[40rem] h-[50rem] sm:min-w-[35rem] sm:h-[45rem]">
            {latest ? (
                <div className="flex flex-col h-full justify-between rounded-[18px] bg-white overflow-hidden">
                    <div className="flex flex-col p-12">
                        <span className="text-[#6e6e73] uppercase text-[1.2rem] pb-5 font-semibold">
                            {designation}
                        </span>
                        <span className="text-[2.5rem] text-[#1d1d1f] font-semibold sm:text-[2.1rem]">
                            {company}
                        </span>
                        <span className="pt-4 text-[1.3rem] text-[#1d1d1f] font-light">
                            {timeline}
                        </span>
                    </div>
                    <div className="relative bottom-0 right-[20%]">
                        <Img />
                    </div>
                </div>
            ) : (
                <div className="flex flex-col h-full justify-between bg-black rounded-[18px] border-[#f5f5f72e] border border-solid">
                    <div className="flex flex-col p-12">
                        <span className="text-[#f5f5f7] uppercase text-[1.2rem] pb-5 font-semibold">
                            {designation}
                        </span>
                        <span className="text-[2.5rem] text-[#ffffff] font-semibold sm:text-[2.1rem]">
                            {company}
                        </span>
                        <span className="pt-4 text-[1.3rem] text-[#ffffff] font-light">
                            {timeline}
                        </span>
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
            )}
            {/* <div className="absolute top-0 flex flex-col p-12">
                {latest ? (
                    <>
                        <span className="text-cgrey uppercase text-[1.2rem] pb-5 font-semibold">
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
                        <span className="text-[2.5rem] text-invert-secondary font-semibold">
                            {company}
                        </span>
                        <span className="pt-4 text-[1.3rem] text-invert-secondary font-light">
                            {timeline}
                        </span>
                    </>
                )}
            </div> */}
        </div>
    );
};

export default WorkCard;
