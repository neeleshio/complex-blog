import LogoSvg from '@/assets/images/svg/Logo';
import React from 'react';
import logo from '../../../assets/images/png/logo.png';
import Image from 'next/image';
import Link from 'next/link';

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
        <nav className="text-[1.2rem] mx-56 px-4 py-5">
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
            </ul>
        </nav>
    );
};

export default Navbar;
