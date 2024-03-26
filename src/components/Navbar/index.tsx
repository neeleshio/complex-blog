import Link from 'next/link';
import React from 'react';
import { StyledNavbar } from './styles';

const Navbar = () => {
    return (
        <StyledNavbar>
            <Link href={'#ecosystem'} scroll>
                Ecosystem
            </Link>
            <Link href={'#experience'} scroll>
                Work History
            </Link>
            <Link href={'#projects'} scroll>
                Projects
            </Link>
            <Link href={'#blog'} scroll>
                Blog
            </Link>
        </StyledNavbar>
    );
};

export default Navbar;
