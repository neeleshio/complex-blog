import HtmlIcon from '@/assets/images/svg/blogIcons/HtmlIcon';
import JsIcon from '@/assets/images/svg/blogIcons/JsIcon';
import JsIcon2 from '@/assets/images/svg/blogIcons/JsIcon2';
import ReactIcon from '@/assets/images/svg/blogIcons/ReactIcon';
import React from 'react';

type BlogCardProps = {
    title: React.ReactNode;
    image: React.FC;
    link: string;
};

const BlogCard = ({ title, image: Image, link }: BlogCardProps) => {
    return (
        <>
            <div className="flex flex-col justify-start rounded-[18px] min-w-[31rem] h-[24rem] bg-white shadow-[2px_4px_12px_#00000014] mr-8 my-8 px-12 pt-16 hover:shadow-[2px_4px_16px_#00000029] cursor-pointer custom-transform">
                <div className="h-[5rem]">
                    <Image />
                </div>

                <div className="text-[2.4rem] font-semibold">{title}</div>
            </div>
        </>
    );
};

export default BlogCard;
