import React from 'react';
import { StyledBlogCard } from './styles';
import Image, { StaticImageData } from 'next/image';
import { Arrow } from '@/src/images/svg/Arrow';

type BlogProps = {
    title: string;
    image: StaticImageData;
    link: string;
    handleLink: (link: string) => void;
};

const BlogCard = ({ title, image, link }: BlogProps) => {
    return (
        <StyledBlogCard onClick={() => handleLink(link)}>
            <div className="img-container">
                <Image src={image} width={240} height={110} />
            </div>
            <div className="title-container">
                <span className="title">{title}</span>
                <Arrow />
            </div>
        </StyledBlogCard>
    );
};

export default BlogCard;
