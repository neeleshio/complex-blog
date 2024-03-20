import Image from 'next/image';
import React from 'react';
import logo from '../../images/svg/logo.svg';
import { StyledLogo } from './styles';

const Logo = () => {
    return (
        <StyledLogo>
            <Image src={logo} alt="logo" width={30} height={30} />
            <span>Complex</span>
        </StyledLogo>
    );
};

export default Logo;
