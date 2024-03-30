'use client';

import Navbar from '@/src/components/Navbar';
import React, { useEffect, useState } from 'react';
import { NAVITEMS } from '@/src/data';

const Header = () => {
    const [state, setState] = useState(false);

    useEffect(() => {
        setState(true);
    }, []);

    return (
        <>
            <Navbar navItems={NAVITEMS} />
            <div className={state ? 'bg-white ribbon' : ''}>
                <div className={state ? 'ribbon-drop-wrapper' : ''}></div>
            </div>
        </>
    );
};

export default Header;
