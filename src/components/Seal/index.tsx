import React from 'react';
import { StyledSeal } from './styles';
import { RoundText } from '@/src/images/svg/RoundText';
import { ArrowDown } from '@/src/images/svg/AroowDown';

const Seal = () => {
    return (
        <StyledSeal>
            <RoundText />
            <div className="arrow-down">3 YoE</div>
        </StyledSeal>
    );
};

export default Seal;
