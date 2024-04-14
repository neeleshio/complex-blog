import { CustomMDX } from '.';
import { getBlogBySlug } from '../fetchBlog';
import React from 'react';

export default async function Blog({ params }) {
    const blog = await getBlogBySlug(params.slug);

    return <CustomMDX source={blog} />;
}
