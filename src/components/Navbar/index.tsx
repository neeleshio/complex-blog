import Link from 'next/link';
import React from 'react';
import { StyledNavbar } from './styles';

const Navbar = () => {
    return (
        <StyledNavbar>
            <Link href={'/portfolio'}>Portfolio</Link>
            <Link href={'/portfolio'}>Contact</Link>
            <Link href={'/portfolio'}>Javascript</Link>
            <span>•••</span>
        </StyledNavbar>
    );
};

export default Navbar;
