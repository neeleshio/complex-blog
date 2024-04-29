import { BlogCardProps } from '@/src/types';
import Image from 'next/image';
import React from 'react';

const BlogCardSmallInvert = ({ title, topic, link, date, img, router }: BlogCardProps) => {
    return (
        <div
            className="flex items-center cursor-pointer justify-between bg-transparent"
            onClick={() =>
                router.push(`/blogs/${link}?title=${title}&topic=${topic}&date=${date}`)
            }>
            <div className="font-semibold h-[10rem] flex flex-col justify-between pr-4">
                <div className="text-[1.7rem] pt-2">{title}</div>
                <div>
                    <div className="text-[1.4rem] mb-[0.8rem] text-menu-color-light">{topic}</div>
                    <div className="text-[1.2rem] mt-[0.4rem] text-menu-color-light">{date}</div>
                </div>
            </div>
            <div className="min-h-[10rem] min-w-[10rem] rounded-[1.6rem] relative md:min-h-[10rem] md:min-w-[10rem]">
                <Image
                    alt={title}
                    src={img}
                    fill
                    className="object-cover rounded-[16px] absolute"
                />
            </div>
        </div>
    );
};

export default BlogCardSmallInvert;
