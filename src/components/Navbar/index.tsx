import LogoSvg from '@/assets/images/svg/Logo';
import React, { FC } from 'react';
import logo from '../../../assets/images/png/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from '@/assets/images/svg/SearchIcon';
import Moon from '@/assets/images/svg/Moon';
import Sun from '@/assets/images/svg/Sun';

type NavItemsType = {
    id: number;
    title: string;
    link: string;
};

type NavbarProps = {
    navItems: NavItemsType[];
    // handleOpenNavMenu: (e: object, state: boolean) => {};
    dispatch: FC;
};

const Navbar = ({ navItems, handleOpenNavMenu, dispatch, handleToggleTheme, dark }) => {
    return (
        <nav className="text-[1.2rem] py-5 relative w-full flex justify-center bg-[#f5f5f7] z-[999]">
            <div className="flex items-center">
                <Link href="/" className="mr-10">
                    <Image alt="logo" src={logo} width={100} />
                </Link>
                <ul className="flex items-center gap-10">
                    {navItems.map((el) => (
                        <li
                            className="px-4"
                            onMouseEnter={() =>
                                dispatch(
                                    handleOpenNavMenu({
                                        target: el.title,
                                        action: true
                                    })
                                )
                            }>
                            <Link href="/">{el.title}</Link>
                        </li>
                    ))}
                </ul>
                <div className="flex ml-12 gap-14">
                    <button className="flex justify-center items-center border-none">
                        <SearchIcon />
                    </button>
                    <button
                        className="flex justify-center items-center border-none"
                        onClick={() => dispatch(handleToggleTheme())}>
                        {dark ? <Sun /> : <Moon />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
