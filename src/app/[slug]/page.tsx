/* eslint-disable react/function-component-definition */
import React from 'react';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import { BlogPage } from '.';

const contentDir = path.join(process.cwd(), '/src/blog-posts');

export const metadata: Metadata = {
    title: 'NSIO | Blog',
    description: 'Blogs written by Neelesh'
};

type BlogProps = {
    params: { slug: string };
    searchParams: { title: string; date: string; topic: string };
};

export default async function Blog({
    params: { slug },
    searchParams: { title, date, topic }
}: BlogProps) {
    const fileName = slug + '.mdx';
    const filePath = path.join(contentDir, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    return <BlogPage date={date} source={fileContent} title={title} topic={topic} />;
}
