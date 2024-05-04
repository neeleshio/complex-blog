import Link from 'next/link';
import React, { FC } from 'react';
import Backdrop from '../Backdrop';
import { NavMenuItemsType } from '@/src/types';

type NavMenuProps = {
    dispatch: FC;
    open: boolean;
    navMenuItems: NavMenuItemsType[];
    height: string;
    handleNavMenu: (state: { target: ''; action: boolean }) => {};
};

const DesktopNavMenu = ({ dispatch, open, navMenuItems, height, handleNavMenu }: NavMenuProps) => {
    const [data_1, ...moreData] = navMenuItems;

    const firstColumn = () => {
        if (data_1 === undefined) return;
        if (Object.keys(data_1).length === 0) return;

        return (
            <div className="pr-[8.8rem]">
                <h2 className="text-[1.2rem] text-menu-color-light font-light pb-[0.6rem]">
                    {data_1.title}
                </h2>
                <ul>
                    {data_1['data'].map((el) => (
                        <li
                            className={`text-[2.2rem] text-menu-color font-semibold pt-[0.9rem] pb-[0.7rem] py-[1.1rem] ${open ? 'li-text-open opacity-100' : 'li-text opacity-0'}`}
                            key={el.name}>
                            <Link className="link-text" href={el.link} target="_blank">
                                {el.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    const nextColumns = () => {
        if (moreData.length === 0) return;
        if (Object.keys(moreData).length === 0) return;

        return moreData.map((el) => (
            <div className="pr-[4.4rem]" key={el.title}>
                <h2 className="text-[1.2rem] text-menu-color-light font-light pb-4">{el.title}</h2>
                <ul>
                    {el['data'].map((elx) => (
                        <li
                            className={`text-[1.2rem] text-menu-color font-semibold py-[0.7rem] px-[1.1rem] pl-0  ${open ? 'li-text-open opacity-100' : 'li-text opacity-0'}`}
                            key={elx.name}>
                            <Link className="link-text" href={elx.link} target="_blank">
                                {elx.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <Backdrop open={open}>
            <div
                style={{ height: open ? `${height}px` : `44px` }}
                className={`w-full bg-primary-bg shadow-[0px_-10px_40px_1px_rgba(0,0,0,0.75)] nav-menu ${open ? `overflow-hidden` : 'invisible overflow-hidden'}`}
                onMouseLeave={() => dispatch(handleNavMenu({ target: '', action: false }))}>
                <div className={`px-56 pt-20 pb-[5rem] flex`}>
                    {firstColumn()}

                    {nextColumns()}
                </div>
            </div>
        </Backdrop>
    );
};

export default DesktopNavMenu;
