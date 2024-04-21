import { BlogCardProps } from '@/src/types';
import Image from 'next/image';
import React from 'react';

const BRCardFull = ({ title, topic, link, date, img, router }: BlogCardProps) => {
    return (
        <div
            className="flex min-h-[36rem] w-full ml:hidden shadow-[2px_4px_12px_#00000014] hover:shadow-[2px_4px_16px_#00000029] border-[#f5f5f72e] border border-solid rounded-[18px] cursor-pointer custom-transform"
            onClick={() => router.push(`/blogs/${link}?title=${title}`)}>
            <div className="bg-invert-secondary w-[65%] rounded-l-[16px] flex justify-center items-center">
                <Image
                    src={img}
                    width={320}
                    height={320}
                    className="object-cover rounded-t-[16px]"
                />
            </div>
            <div className="w-[35%] p-[3.2rem] rounded-r-[16px] bg-primary-bg flex flex-col justify-between">
                <div>
                    <span className="text-cgrey text-[1.2rem] font-semibold">{topic}</span>
                    <h1 className="text-[3.2rem] mt-4">{title}</h1>
                </div>
                <div className="text-cgrey text-[1.4rem] font-semibold">{date}</div>
            </div>
        </div>
    );
};

export default BRCardFull;
