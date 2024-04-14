import LogoSvg from '@/assets/images/svg/Logo';
import React, { FC } from 'react';
import logoblack from '../../../assets/images/png/logoblack.png';
import logowhite from '../../../assets/images/png/logowhite.png';
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
        <nav className="text-[1.2rem] py-5 relative w-full flex justify-center bg-navbg z-[999]">
            <div className="flex items-center">
                <Link href="/" className="mr-10">
                    <div className={`${dark ? 'visible' : 'hidden'}`}>
                        <Image alt="logo" src={logowhite} width={100} />
                    </div>
                    <div className={`${dark ? 'hidden' : 'visible'}`}>
                        <Image alt="logo" src={logoblack} width={100} />
                    </div>
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
                <div className="flex ml-14 gap-16">
                    <button className="flex justify-center bg-navbg items-center border-none">
                        <SearchIcon dark={dark} />
                    </button>
                    <button
                        className="flex justify-center bg-navbg items-center border-none"
                        onClick={() => dispatch(handleToggleTheme())}>
                        {dark ? <Sun dark={dark} /> : <Moon />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
