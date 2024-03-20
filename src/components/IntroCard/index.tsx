import React from 'react';
import { StyledIntroCard } from './styles';
import Image from 'next/image';
import Dp from '../../images/png/dp.jpg';

const IntroCard = () => {
    return (
        <StyledIntroCard>
            <div className="dp">
                <Image alt="dp" src={Dp} width={144} height={144} />
            </div>
            <div className="info">
                <h1>Neelesh AN</h1>
                <p>Forntend Software Developer</p>
            </div>
        </StyledIntroCard>
    );
};

export default IntroCard;
