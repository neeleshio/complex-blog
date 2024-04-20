import ArrowDown from '@/assets/images/svg/ArrowDown';
import Wrong from '@/assets/images/svg/Wrong';
import Link from 'next/link';
import React from 'react';

const MobileNavMenu = ({
    mobileNavOpen,
    handleOpenMobileNav,
    dispatch,
    navItems,
    handleOpenNavMenu,
    mobileNavMenuItems,
    target,
    dark
}) => {
    return (
        <div
            style={{ height: mobileNavOpen ? `100%` : `0px` }}
            className={`h-full fixed z-[999] bg-primary-bg w-full top-0 nav-menu ${mobileNavOpen ? `` : 'invisible'}`}>
            <div className="">
                <div
                    className="pr-[2.3rem] py-7 flex justify-end"
                    onClick={() => dispatch(handleOpenMobileNav(false))}>
                    <Wrong dark={dark} />
                </div>

                <ul className="overflow-auto mt-6">
                    {navItems.map((el) => (
                        <li
                            className={`text-[2.2rem] font-semibold py-2 px-20 ${mobileNavOpen ? 'li-text-open opacity-100' : 'li-text opacity-0'}`}
                            onClick={() => {
                                el.title === target
                                    ? dispatch(handleOpenNavMenu({ action: false, target: '' }))
                                    : dispatch(
                                          handleOpenNavMenu({ action: false, target: el.title })
                                      );
                                el.link && dispatch(handleOpenMobileNav(false));
                            }}>
                            <Link
                                className="pb-[1rem] flex items-center justify-between"
                                href={el.link}>
                                <span>{el.title}</span>
                                {!el.link &&
                                    (el.title === target ? (
                                        <div className="w-[1.6rem] h-4 flex rotate-180">
                                            <ArrowDown dark={dark} />
                                        </div>
                                    ) : (
                                        <div className="w-[1.6rem] h-4 flex ">
                                            <ArrowDown dark={dark} />
                                        </div>
                                    ))}
                            </Link>

                            {el.title === target && (
                                <ul className="text-[1.6rem] font-normal ml-8">
                                    {mobileNavMenuItems.map((el) => (
                                        <li
                                            className={`py-[0.8rem] ${mobileNavOpen ? 'li-text-open opacity-100' : 'li-text opacity-0'}`}
                                            onClick={() => dispatch(handleOpenMobileNav(false))}>
                                            {el.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MobileNavMenu;
