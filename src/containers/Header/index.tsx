'use client';

import React, { useEffect, useState } from 'react';
import { NAVITEMS } from '@/src/data';
import DesktopNavMenu from '@/src/components/DesktopNavMenu';
import { useAppDispatch, useAppSelector } from '@/src/hooks';
import { handleNavMenu, handleOpenMobileNav } from '@/src/store/slices/navSlice';
import { navSelector } from '@/src/store/slices/navSlice';
import { NAVMENU_DATA } from '@/src/data/navdata';
import { handleToggleTheme, themeSelector } from '@/src/store/slices/themeSlice';
import Navbar from '@/src/components/Navbar';
import MobileNavMenu from '@/src/components/MobileNavMenu';
import { NavMenuItemsType } from '@/src/types';

type mobileNavMenuItemsType = {
    name: string;
    link: string;
};

type NavMenuDataType = {
    SKILLS: NavMenuItemsType[];
    'WORK HISTORY': NavMenuItemsType[];
    PROJECTS: NavMenuItemsType[];
    'QUICK ARTICLES': NavMenuItemsType[];
    CONTACT: NavMenuItemsType[];
};

type HeaderPropsType = {
    page: 'home' | 'blog';
};

const Header = ({ page }: HeaderPropsType) => {
    const dispatch = useAppDispatch();
    const { open, target, mobileNavOpen } = useAppSelector(navSelector);
    const { dark } = useAppSelector(themeSelector);
    const [navMenuItems, setNavMenuItems] = useState<NavMenuItemsType[]>([]);
    const [mobileNavMenuItems, setMobileNavMenuItems] = useState<mobileNavMenuItemsType[] | []>([]);
    const [navMenuHeight, setNavMenuHeight] = useState('');

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
            const targetNavItem: string = target.toUpperCase();
            const navMenuDataCopy: NavMenuDataType = { ...NAVMENU_DATA };
            const data: NavMenuItemsType[] =
                navMenuDataCopy[targetNavItem as keyof NavMenuDataType];

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
                const newObj: mobileNavMenuItemsType[] = [];

                data.map((el) => {
                    newObj.push(...el.data);
                });

                setMobileNavMenuItems(newObj);
            }
        }
    }, [target]);

    return (
        <>
            <Navbar
                navItems={NAVITEMS}
                handleNavMenu={handleNavMenu}
                dispatch={dispatch}
                handleToggleTheme={handleToggleTheme}
                dark={dark}
                handleOpenMobileNav={handleOpenMobileNav}
            />

            <DesktopNavMenu
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
