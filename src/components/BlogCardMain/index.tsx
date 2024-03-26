import React from 'react';
import { StyledBlogCardMain } from './styles';
import Image, { StaticImageData } from 'next/image';
import { Arrow } from '@/src/images/svg/Arrow';

type LatestBlogProps = {
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
    handleLink: (link: string) => void;
};

const BlogCardMain = ({ title, description, image, link, handleLink }: LatestBlogProps) => {
    return (
        <StyledBlogCardMain onClick={() => handleLink(link)}>
            <div className="heading">
                <span className="heading-1">Latest</span>
                <span>Read the latest blog post</span>
            </div>
            <div className="img">
                <Image src={image} height={160} width={450} />
            </div>
            <div className="content">
                <span className="title">{title}</span>
                <span className="description">{description}</span>
                <div className="read-more-container">
                    <span>Read More</span>
                    <Arrow />
                </div>
            </div>
        </StyledBlogCardMain>
    );
};

export default BlogCardMain;
