import { NAVMENU_DATA } from '@/src/data/navdata';
import { useAppDispatch, useAppSelector } from '@/src/hooks';
import { navSelector } from '@/src/store/slices/navSlice';
import { themeSelector } from '@/src/store/slices/themeSlice';
import React, { useState, useEffect } from 'react';

const Ribbon = () => {
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
        <div className="ribbon-drop-wrapper">
            <div className="ribbon">
                <span className="text-[1.4rem] flex justify-center items-center py-6 font-light flex-wrap">
                    Total experience of{' '}
                    <span className="font-semibold">&nbsp;{totalExp}&nbsp;</span>years in building
                    scalable frontend applications.
                </span>
            </div>
        </div>
    );
};

export default Ribbon;
