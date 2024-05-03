import React from 'react';
import { FOOTER_DATA } from '@/src/data/footerdata';
import { Copyright, FooterCard } from '@/src/components';

const Footer = () => {
    return (
        <footer className="max-w-[98rem] m-auto py-12 lg:mx-28 md:mx-14 sm:mx-7">
            <div className="">
                <div className="flex justify-between border-t-0 border-r-0 border-l-0 border-b-[1px] pb-[2.4rem] border-b-[#d2d2d7] border-solid">
                    {FOOTER_DATA.map((obj, idx) => (
                        <FooterCard obj={obj} idx={idx} />
                    ))}
                </div>
            </div>
            <Copyright />
        </footer>
    );
};

export default Footer;
