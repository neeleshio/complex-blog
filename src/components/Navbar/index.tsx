import LogoSvg from '@/assets/images/svg/Logo';
import React, { FC } from 'react';
import logoblack from '../../../assets/images/png/logoblack.png';
import logowhite from '../../../assets/images/png/logowhite.png';
import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from '@/assets/images/svg/SearchIcon';
import Moon from '@/assets/images/svg/Moon';
import Sun from '@/assets/images/svg/Sun';
import HamburgIcon from '@/assets/images/svg/Hamburg';
import { NavItemsType } from '@/src/types';

type NavbarProps = {
    navItems: NavItemsType[];
    dispatch: FC;
    dark: boolean;
    handleNavMenu: (state: { target: string; action: boolean }) => {};
    handleToggleTheme: () => {};
    handleOpenMobileNav: (state: boolean) => {};
};

const Navbar = ({
    navItems,
    dispatch,
    dark,
    handleNavMenu,
    handleToggleTheme,
    handleOpenMobileNav
}: NavbarProps) => {
    return (
        <header
            className="text-[1.2rem] py-5 relative w-full flex justify-center bg-[#454545] z-[1000] header"
            aria-label="header-blog">
            <nav className="flex items-center lg:justify-between lg:px-8 lg:w-full">
                <Link href="https://neeleshio.xyz" className="mr-10">
                    <div>
                        <Image alt="logo" src={logowhite} width={100} />
                    </div>
                </Link>
                <ul className="flex items-center gap-10 lg:hidden">
                    {navItems.map((el) => (
                        <li
                            className="px-4 text-[#e2e2e0]"
                            onMouseEnter={() =>
                                dispatch(
                                    handleNavMenu({
                                        target: el.title,
                                        action: true
                                    })
                                )
                            }
                            key={el.id}>
                            <Link href={el.link} target={el?.target ? '_blank' : '_self'}>
                                {el.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex ml-14 gap-16 sm:gap-10">
                    <button
                        className="flex justify-center bg-[#454545] items-center border-none"
                        type="search">
                        <SearchIcon dark={true} />
                    </button>
                    <button
                        className="flex justify-center bg-[#454545] items-center border-none"
                        onClick={() => dispatch(handleToggleTheme())}>
                        {dark ? <Sun dark={true} /> : <Moon color="#e2e2e0" />}
                    </button>
                    <button
                        className="justify-center bg-[#454545] items-center border-none hidden lg:flex"
                        onClick={() => dispatch(handleOpenMobileNav(true))}>
                        <HamburgIcon dark={true} />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
