/* eslint-disable react/forbid-component-props */
import { BlogCardProps } from '@/src/types';
import Image from 'next/image';
import React from 'react';

const BlogCardLarge = ({ id, title, topic, link, date, img, router }: BlogCardProps) => {
    return (
        <div
            className="rounded-[16px] block max-w-[45rem] w-full md:max-w-[100%] shadow-[2px_4px_12px_#00000014] hover:shadow-[2px_4px_16px_#00000029] border-[#f5f5f72e] border border-solid cursor-pointer custom-transform"
            onClick={() => router.push(`/${link}?title=${title}&topic=${topic}&date=${date}`)}
            key={id}
            onKeyDown={() => router.push(`/${link}?title=${title}&topic=${topic}&date=${date}`)}
            tabIndex={0}
            role="link">
            <div className="h-[26rem] relative lg:h-[22rem] ml:h-[18rem]">
                <Image
                    alt={title}
                    className="rounded-t-[16px] object-cover absolute blog-img"
                    fill
                    src={img}
                    // placeholder="blur"
                    blurDataURL=""
                />
            </div>
            <div className="flex flex-col p-[3.2rem] justify-between ml:p-[2.4rem]">
                <div>
                    <div className="text-[1.2rem] mb-4 font-semibold text-cgrey">
                        {topic.toUpperCase()}
                    </div>
                    <div className="text-[2.2rem] font-semibold ml:text-[1.9rem]">{title}</div>
                </div>
                <div className="text-[1.4rem] mt-5 font-semibold text-cgrey">{date}</div>
            </div>
        </div>
    );
};

export default BlogCardLarge;
