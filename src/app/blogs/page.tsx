/* eslint-disable react/function-component-definition */
import BlogsWall from '@/src/pages/BlogsWall';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'NSIO | Blog',
    description: 'Blogs written by Neelesh'
};

export default function Blogs() {
    return <BlogsWall />;
}
