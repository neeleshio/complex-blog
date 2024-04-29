import AllBlogsPage from '@/src/pages/AllBlogs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'NSIO | All Blog',
    description: 'Blogs written by Neelesh'
};

export default function AllBlogs() {
    return <AllBlogsPage />;
}
