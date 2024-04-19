'use client';

import Navbar from '@/src/components/Navbar';
import React, { useEffect, useState } from 'react';
import { NAVITEMS } from '@/src/data';
import NavMenu from '@/src/components/NavMenu';
import { useAppDispatch, useAppSelector } from '@/src/hooks';
import { handleOpenNavMenu } from '@/src/store/slices/navSlice';
import { navSelector } from '@/src/store/slices/navSlice';
import { NAVMENU_DATA } from '@/src/data/navdata';
import { handleToggleTheme, themeSelector } from '@/src/store/slices/themeSlice';
import BlogNavbar from '@/src/components/BlogNavbar';
import { usePathname, useSearchParams } from 'next/navigation';
import MobileNavMenu from '@/src/components/MobileNavMenu';

const Header = () => {
    const dispatch = useAppDispatch();
    const { open, target } = useAppSelector(navSelector);
    const { dark } = useAppSelector(themeSelector);
    const [navMenuItems, setNavMenuItems] = useState([]);
    const [navMenuHeight, setNavMenuHeight] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        if (target) {
            const _target = target.toUpperCase();
            const data = NAVMENU_DATA[_target];

            if (data && data.length > 0) {
                const firstColumnDataLength = data[0]['data'].length;
                const height = (125 + firstColumnDataLength * 44).toString();
                setNavMenuHeight(height);
                setNavMenuItems(data);
            }
        }
    }, [target]);

    return (
        <>
            {pathname === '/' ? (
                <Navbar
                    navItems={NAVITEMS}
                    handleOpenNavMenu={handleOpenNavMenu}
                    dispatch={dispatch}
                    handleToggleTheme={handleToggleTheme}
                    dark={dark}
                />
            ) : (
                <BlogNavbar
                    navItems={NAVITEMS}
                    handleOpenNavMenu={handleOpenNavMenu}
                    dispatch={dispatch}
                    handleToggleTheme={handleToggleTheme}
                    dark={dark}
                />
            )}
            <NavMenu
                open={open}
                handleOpenNavMenu={handleOpenNavMenu}
                dispatch={dispatch}
                data={navMenuItems}
                height={navMenuHeight}
            />
            <MobileNavMenu
                open={open}
                navItems={NAVITEMS}
                handleOpenNavMenu={handleOpenNavMenu}
                dispatch={dispatch}
            />
        </>
    );
};

export default Header;
