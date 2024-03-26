import React from 'react';
import { StyledSlide } from './styles';
import { ArrowDown } from '@/src/images/svg/AroowDown';
import Image, { StaticImageData } from 'next/image';

type ProjectProps = {
    name: string;
    image: StaticImageData;
    description: string;
};

const Slide = ({ name, image, description }: ProjectProps) => {
    return (
        <StyledSlide>
            <div className="header">
                <span>N` {name}</span>
            </div>
            <div className="content">
                <div className="title">{name}</div>
                <Image src={image} height={130} width={130} />
                <div className="desc">
                    <span>{description}</span>
                </div>
                <ArrowDown />
            </div>
        </StyledSlide>
    );
};

export default Slide;
