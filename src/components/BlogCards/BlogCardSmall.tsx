import { BlogCardProps } from '@/src/types';
import Image from 'next/image';
import React from 'react';

const BlogCardSmall = ({ title, topic, link, date, img, router }: BlogCardProps) => {
    return (
        <div
            className="bg-project-card-bg flex items-center cursor-pointer"
            onClick={() =>
                router.push(`/blogs/${link}?title=${title}&topic=${topic}&date=${date}`)
            }>
            <div className="min-h-[13rem] min-w-[13rem] rounded-[1.6rem] relative md:min-h-[10rem] md:min-w-[10rem]">
                <Image
                    alt={title}
                    src={img}
                    fill
                    className="object-cover rounded-[16px] absolute"
                />
            </div>
            <div className="font-semibold pl-[2.4rem]">
                <div className="text-[1.2rem] mb-[0.4rem] text-menu-color-light">{topic}</div>
                <div className="text-[1.7rem]">{title}</div>
                <div className="text-[1.4rem] mt-[0.8rem] text-menu-color-light">{date}</div>
            </div>
        </div>
    );
};

export default BlogCardSmall;
