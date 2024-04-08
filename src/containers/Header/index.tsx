'use client';

import Navbar from '@/src/components/Navbar';
import React, { useEffect, useState } from 'react';
import Ribbon from '@/src/components/Ribbon';
import { NAVITEMS } from '@/src/data';
import NavMenu from '@/src/components/NavMenu';
import { useAppDispatch, useAppSelector } from '@/src/hooks';
import { handleOpenNavMenu } from '@/src/store/slices/navSlice';
import { navSelector } from '@/src/store/slices/navSlice';
import { NAVMENU_DATA } from '@/src/data/navdata';
import { handleToggleTheme, themeSelector } from '@/src/store/slices/themeSlice';

const Header = () => {
    const [totalExp, setTotalExp] = useState(0.0);
    const dispatch = useAppDispatch();
    const { open, target } = useAppSelector(navSelector);
    const { dark } = useAppSelector(themeSelector);
    const [navMenuItems, setNavMenuItems] = useState([]);

    useEffect(() => {
        setNavMenuItems(NAVMENU_DATA[target?.toUpperCase()]);
    }, [target]);

    useEffect(() => {
        handleTotalExpirience();
    }, []);

    const handleTotalExpirience = () => {
        const dateFrom = new Date(2020, 10);
        const dateTo = new Date();

        let exp =
            dateTo.getMonth() -
            dateFrom.getMonth() +
            12 * (dateTo.getFullYear() - dateFrom.getFullYear());

        const years = Math.floor(exp / 12);
        const months = (exp % 12) / 10;

        setTotalExp(years + months);
    };

    return (
        <>
            <Navbar
                navItems={NAVITEMS}
                handleOpenNavMenu={handleOpenNavMenu}
                dispatch={dispatch}
                handleToggleTheme={handleToggleTheme}
                dark={dark}
            />
            <NavMenu
                open={open}
                handleOpenNavMenu={handleOpenNavMenu}
                dispatch={dispatch}
                data={navMenuItems}
            />
            <Ribbon totalExp={totalExp} />
        </>
    );
};

export default Header;
