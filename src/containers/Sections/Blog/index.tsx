import React from 'react';
import { StyledBlog } from './styles';
import BlogCardMain from '@/src/components/BlogCardMain';
import { LATEST_BLOG, BLOGS } from '../../../data';
import BlogCard from '@/src/components/BlogCard';

const Blog = () => {
    const handleLink = (link: string) => {
        window.open(link, '_blank');
    };

    return (
        <StyledBlog id="blog">
            <BlogCardMain {...LATEST_BLOG} handleLink={handleLink} />
            <div className="blogs">
                <div className="discover-heading">
                    <span className="heading-title">Discover</span>
                    <span className="heading-subtitle">Some recent projects</span>
                </div>
                <div className="discover-blogs">
                    {BLOGS.map((el) => (
                        <BlogCard {...el} handleLink={handleLink} />
                    ))}
                </div>
            </div>
        </StyledBlog>
    );
};

export default Blog;
