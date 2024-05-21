/* eslint-disable react/forbid-component-props */
import Image from 'next/image';
import React from 'react';

const BlogCardLarge = () => {
    return (
        <div
            className="rounded-[16px] block max-w-[45rem] w-full md:max-w-[100%] shadow-[2px_4px_12px_#00000014] hover:shadow-[2px_4px_16px_#00000029] border-[#f5f5f72e] border border-solid cursor-pointer custom-transform"
            tabIndex={0}
            role="link"></div>
    );
};

export default BlogCardLarge;
