import React from 'react';
import { StyledHeader } from './styles';
import Logo from '@/src/components/Logo';
import Navbar from '@/src/components/Navbar';
import SearchBar from '@/src/components/SearchBar';
import User from '@/src/components/User';

const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <div className="nav-container">
                <div className="nav-search">
                    <Navbar />
                    <SearchBar />
                </div>
                <User />
            </div>
        </StyledHeader>
    );
};

export default Header;
