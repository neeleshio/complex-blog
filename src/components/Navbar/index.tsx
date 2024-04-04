import LogoSvg from '@/assets/images/svg/Logo';
import React from 'react';
import logo from '../../../assets/images/png/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from '@/assets/images/svg/SearchIcon';

type NavItemsType = {
    id: number;
    title: string;
    link: string;
};

type NavbarProps = {
    navItems: NavItemsType[];
};

const Navbar = ({ navItems }: NavbarProps) => {
    return (
        <nav className="text-[1.2rem] px-56 py-5 fixed w-full bg-[#f5f5f7] z-50">
            <ul className="flex items-center justify-between">
                <li>
                    <Link href="/">
                        <Image alt="logo" src={logo} width={100} />
                    </Link>
                </li>
                {navItems.map((el) => (
                    <li className="px-4">
                        <Link href="/">{el.title}</Link>
                    </li>
                ))}
                <li>
                    <SearchIcon />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
