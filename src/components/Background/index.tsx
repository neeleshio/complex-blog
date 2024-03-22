import React from 'react';
import { StyledBackground } from './styles';
import fabric from '../../images/png/fabric.png';
import Image from 'next/image';

const Background = () => {
    return (
        <StyledBackground>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <div className="five"></div>
            <div className="bg-fabric">
                <Image src={fabric} />
            </div>
        </StyledBackground>
    );
};

export default Background;
