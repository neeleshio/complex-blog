'use client';

import Navbar from '@/src/components/Navbar';
import React, { useEffect, useState } from 'react';
import Ribbon from '@/src/components/Ribbon';
import { NAVITEMS } from '@/src/data';

const Header = () => {
    const [totalExp, setTotalExp] = useState(0.0);

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
            <Navbar navItems={NAVITEMS} />
            <Ribbon totalExp={totalExp} />
        </>
    );
};

export default Header;
