'use client';

import Navbar from '@/src/components/Navbar';
import React, { useEffect, useState } from 'react';
import { NAVITEMS } from '@/src/data';
import NavMenu from '@/src/components/NavMenu';
import { useAppDispatch, useAppSelector } from '@/src/hooks';
import { handleNavMenu, handleOpenMobileNav } from '@/src/store/slices/navSlice';
import { navSelector } from '@/src/store/slices/navSlice';
import { NAVMENU_DATA } from '@/src/data/navdata';
import { handleToggleTheme, themeSelector } from '@/src/store/slices/themeSlice';
import BlogNavbar from '@/src/components/BlogNavbar';
import { usePathname, useSearchParams } from 'next/navigation';
import MobileNavMenu from '@/src/components/MobileNavMenu';

const Header = () => {
    const dispatch = useAppDispatch();
    const { open, target, mobileNavOpen } = useAppSelector(navSelector);
    const { dark } = useAppSelector(themeSelector);
    const [navMenuItems, setNavMenuItems] = useState([]);
    const [mobileNavMenuItems, setMobileNavMenuItems] = useState([]);
    const [navMenuHeight, setNavMenuHeight] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        if (mobileNavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        if (!mobileNavOpen) {
            dispatch(
                handleNavMenu({
                    action: false,
                    target: ''
                })
            );
        }
    }, [mobileNavOpen]);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    useEffect(() => {
        if (target) {
            const _target = target.toUpperCase();
            const data = NAVMENU_DATA[_target];

            if (data && data.length > 0) {
                const firstColumnDataLength = data[0]['data'].length;
                const height = (125 + firstColumnDataLength * 44).toString();
                setNavMenuHeight(height);
                setNavMenuItems(data);
            } else {
                setNavMenuItems([]);
                dispatch(
                    handleNavMenu({
                        action: false,
                        target: ''
                    })
                );
            }

            if (data && data.length > 0) {
                const newObj = [];

                data.map((el) => {
                    newObj.push(...el.data);
                });

                setMobileNavMenuItems(newObj);
            }
        }
    }, [target]);

    return (
        <>
            {pathname === '/' ? (
                <Navbar
                    navItems={NAVITEMS}
                    handleNavMenu={handleNavMenu}
                    dispatch={dispatch}
                    handleToggleTheme={handleToggleTheme}
                    dark={dark}
                    handleOpenMobileNav={handleOpenMobileNav}
                />
            ) : (
                <BlogNavbar
                    navItems={NAVITEMS}
                    handleNavMenu={handleNavMenu}
                    dispatch={dispatch}
                    handleToggleTheme={handleToggleTheme}
                    dark={dark}
                    handleOpenMobileNav={handleOpenMobileNav}
                />
            )}
            <NavMenu
                open={open}
                handleNavMenu={handleNavMenu}
                dispatch={dispatch}
                navMenuItems={navMenuItems}
                height={navMenuHeight}
            />
            <MobileNavMenu
                mobileNavOpen={mobileNavOpen}
                navItems={NAVITEMS}
                dispatch={dispatch}
                handleOpenMobileNav={handleOpenMobileNav}
                handleNavMenu={handleNavMenu}
                mobileNavMenuItems={mobileNavMenuItems}
                target={target}
                dark={dark}
            />
        </>
    );
};

export default Header;
