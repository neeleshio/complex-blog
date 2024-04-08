import React from 'react';
import BlogCard from '@/src/components/BlogCard';
import CustomScroll from '@/src/components/CustomScroll';
import { BLOGS } from '@/src/data';
import useOpenLink from '@/src/hooks/useOpenLink';

const Blog = () => {
    const { navigate } = useOpenLink();

    return (
        <div>
            <div className="pt-[5.4rem] overflow-hidden">
                <div className="text-[2.8rem] font-semibold px-56">
                    <h2 className="inline text-[2.8rem] font-semibold">Blog.</h2>
                    <span className="text-[#6e6e73] pl-2">
                        Current and previous companies I worked for.
                    </span>
                </div>
                <CustomScroll height={24}>
                    {BLOGS.map((el) => (
                        <BlogCard {...el} navigate={navigate} />
                    ))}
                </CustomScroll>
            </div>
        </div>
    );
};

export default Blog;
