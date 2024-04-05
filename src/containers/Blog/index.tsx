import BlogCard from '@/src/components/BlogCard';
import CustomScroll from '@/src/components/CustomScroll';
import { BLOGS } from '@/src/data';

import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="pt-[8rem] overflow-hidden">
                <div className="text-[2.8rem] font-semibold px-56">
                    <h2 className="inline text-[2.8rem] font-semibold">Blog.</h2>
                    <span className="text-[#6e6e73] pl-2">
                        Current and previous companies I worked for.
                    </span>
                </div>
                {/* <div className="flex pt-16"> */}
                <CustomScroll height={24}>
                    {BLOGS.map((el) => (
                        <BlogCard {...el} />
                    ))}
                </CustomScroll>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Blog;
