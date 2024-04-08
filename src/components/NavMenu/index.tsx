import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';

type NavMenuProps = {
    handleOpenNavMenu: (state: boolean) => {};
    dispatch: FC;
    open: boolean;
    data: [];
};

const NavMenu = ({ handleOpenNavMenu, dispatch, open, data }) => {
    // const [topics, quickLinks, moreTopics] = data;
    console.log('data', data);
    const height = 125 + data?.[0]?.length * 44;

    return (
        <div
            className={`h-screen w-screen fixed bg-[#e8e8ed66] z-[998] nav-menu-backdrop ${open ? 'opacity-100 visible nav-menu-backdrop-open' : 'opacity-0 invisible nav-menu-backdrop-end'}`}>
            <div
                style={{ height: open ? `${height.toString()}px` : `44px` }}
                className={`w-full bg-[#f5f5f7] shadow-[0px_-10px_40px_1px_rgba(0,0,0,0.75)] nav-menu ${open ? `overflow-hidden` : 'invisible overflow-hidden'}`}
                onMouseLeave={() => dispatch(handleOpenNavMenu('', false))}>
                <div className={`px-56 pt-20 pb-[5rem] flex`}>
                    <div className="pr-[8.8rem]">
                        <h2 className="text-[1.2rem] text-[#6e6e73] font-light pb-[0.6rem]">
                            Topics
                        </h2>
                        <ul>
                            {data?.[0]?.map((el) => (
                                <li
                                    className={`text-[2.2rem] text-[#333336] font-semibold pt-[0.9rem] pb-[0.7rem] py-[1.1rem] ${open ? 'li-text-open opacity-100' : 'li-text opacity-0'}`}>
                                    <Link className="link-text" href={''}>
                                        {el.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pr-[4.4rem]">
                        <h2 className="text-[1.2rem] text-[#6e6e73] font-light pb-4">
                            Quick Links
                        </h2>
                        <ul>
                            {data?.[1]?.map((el) => (
                                <li
                                    className={`text-[1.2rem] text-[#333336] font-semibold py-[0.7rem] px-[1.1rem] pl-0  ${open ? 'li-text-open opacity-100' : 'li-text opacity-0'}`}>
                                    <Link className="link-text" href={''}>
                                        {el.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pr-[4.4rem]">
                        <h2 className="text-[1.2rem] text-[#6e6e73] font-light pb-4">
                            More Articles
                        </h2>
                        <ul>
                            {data?.[2]?.map((el) => (
                                <li
                                    className={`text-[1.2rem] text-[#333336] font-semibold py-[0.7rem] px-[1.1rem] pl-0  ${open ? 'li-text-open opacity-100' : 'li-text opacity-0'}`}>
                                    <Link className="link-text" href={''}>
                                        {el.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;
