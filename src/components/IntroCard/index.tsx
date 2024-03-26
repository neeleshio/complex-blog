import React from 'react';
import { StyledIntroCard } from './styles';
import Image from 'next/image';
import DisplayPic from '../../images/png/display-pic.jpg';
import { Mansalva } from 'next/font/google';

const mansalva = Mansalva({
    subsets: ['latin'],
    weight: ['400']
});

const IntroCard = () => {
    return (
        <StyledIntroCard>
            <div className="display-pic">
                <Image alt="display-pic" src={DisplayPic} width={144} height={144} />
            </div>
            <div className="intro">
                <h1 className={mansalva.className}>Neelesh Shetty</h1>
                <p>Frontend Software Developer</p>
            </div>
        </StyledIntroCard>
    );
};

export default IntroCard;
