import Link from 'next/link';
import React from 'react';
import { StyledNavbar } from './styles';

const Navbar = () => {
    return (
        <StyledNavbar>
            <Link href={'/portfolio'}>Ecosystem</Link>
            <Link href={'/portfolio'}>Governance</Link>
            <Link href={'/portfolio'}>Community</Link>
            <Link href={'/portfolio'}>Blog</Link>
        </StyledNavbar>
    );
};

export default Navbar;
