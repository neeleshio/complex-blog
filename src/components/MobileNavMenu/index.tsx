import Wrong from '@/assets/images/svg/Wrong';
import Link from 'next/link';
import React from 'react';

const MobileNavMenu = ({ open, handleOpenNavMenu, dispatch, navItems }) => {
    return (
        <div
            style={{ height: open ? `100%` : `0px` }}
            className={`h-full fixed z-[999] bg-navbg w-full top-0 nav-menu ${open ? `overflow-hidden` : 'invisible overflow-hidden'}`}>
            <div className="">
                <div
                    className="pr-[2.5rem] py-7 flex justify-end"
                    onClick={() =>
                        dispatch(
                            handleOpenNavMenu({
                                target: 'skills',
                                action: false
                            })
                        )
                    }>
                    <Wrong />
                </div>

                <ul>
                    {navItems.map((el) => (
                        <li className="text-[2.8rem] font-semibold py-4 px-20">
                            <Link href={el.link}>{el.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MobileNavMenu;
