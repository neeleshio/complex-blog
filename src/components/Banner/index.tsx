import React from 'react';
import { StyledBanner } from './styles';
import { Diamond } from '@/src/images/svg/Diamond';

const Banner = () => {
    return (
        <StyledBanner>
            <span>
                reactjs <Diamond /> javascript <Diamond /> typescript <Diamond /> redux <Diamond />
                nextjs <Diamond /> restful <Diamond /> jest <Diamond /> reactnative <Diamond />
            </span>
        </StyledBanner>
    );
};

export default Banner;
