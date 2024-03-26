import Image from 'next/image';
import React from 'react';
import logo from '../../images/svg/logo.svg';
import { StyledLogo } from './styles';
import LogoSvg from '@/src/images/svg/Logo';

const Logo = () => {
    return (
        <StyledLogo>
            <LogoSvg />
            <span>ns.io</span>
        </StyledLogo>
    );
};

export default Logo;
