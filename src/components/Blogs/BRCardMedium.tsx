import { BlogCardProps } from '@/src/types';
import Image from 'next/image';
import React from 'react';

const BRCardMedium = ({ title, topic, link, date, img, router }: BlogCardProps) => {
    return (
        <div
            className="bg-project-card-bg rounded-[16px] shadow-[2px_4px_12px_#00000014] hover:shadow-[2px_4px_16px_#00000029] cursor-pointer custom-transform"
            onClick={() => router.push(`/blogs/${link}?title=${title}`)}>
            <div className="h-[17rem] relative">
                <Image src={img} fill className="object-cover rounded-t-[16px] absolute" />
            </div>
            <div className="flex flex-col p-[1.7rem] justify-between">
                <div>
                    <div className="text-[1.2rem] mb-4 font-semibold text-menu-color-light">
                        {topic}
                    </div>
                    <div className="text-[1.9rem] font-semibold">{title}</div>
                </div>
                <div className="text-[1.4rem] mt-5 font-semibold text-menu-color-light">{date}</div>
            </div>
        </div>
    );
};

export default BRCardMedium;
