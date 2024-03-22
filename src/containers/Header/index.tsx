import React from 'react';
import { StyledHeader } from './styles';
import Logo from '@/src/components/Logo';
import Navbar from '@/src/components/Navbar';
import SearchBar from '@/src/components/SearchBar';
import User from '@/src/components/User';
import { Rocket } from '@/src/images/svg/Rocket';
import LoginBtn from '@/src/components/LoginBtn';

const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Navbar />
            <LoginBtn />
        </StyledHeader>
    );
};

export default Header;
