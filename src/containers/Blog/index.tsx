import BlogCard from '@/src/components/BlogCard';
import { BLOGS } from '@/src/data';

import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="px-56 pt-[8rem] overflow-hidden">
                <div className="text-[2.8rem] font-semibold">
                    <h2 className="inline text-[2.8rem] font-semibold">Blog.</h2>
                    <span className="text-[#6e6e73] pl-2">
                        Current and previous companies I worked for.
                    </span>
                </div>
                <div className="flex pt-16">
                    {BLOGS.map((el) => (
                        <BlogCard {...el} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
