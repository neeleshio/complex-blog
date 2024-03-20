import React from 'react';
import { StyledHeader } from './styles';
import Logo from '@/app/components/Logo';
import Navbar from '@/app/components/Navbar';
import SearchBar from '@/app/components/SearchBar';
import User from '@/app/components/User';

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
