import React from 'react';
import { StyledFirstSlide } from './styles';
import { ArrowDown } from '@/src/images/svg/AroowDown';

const FirstSlide = () => {
    return (
        <StyledFirstSlide>
            <ArrowDown />
            <div className="title">
                <span className="featured">Featured</span>
                <span className="projects">Projects</span>
            </div>
        </StyledFirstSlide>
    );
};

export default FirstSlide;
