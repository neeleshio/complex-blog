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
    searchParams: { title: string };
};

export default async function Blog({ params: { slug }, searchParams: { title } }: BlogProps) {
    const fileName = slug + '.mdx';
    const filePath = path.join(contentDir, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    return <BlogPage source={fileContent} title={title} />;
}
