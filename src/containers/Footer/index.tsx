import React from 'react';
import { FOOTER_DATA } from '@/src/data/footerdata';
import ColumnCard from '@/src/components/ColumnCard';
import Copyright from '@/src/components/Copyright';

const Footer = () => {
    return (
        <div className="w-[98rem] m-auto pb-12">
            <div className="">
                <div className="flex justify-between border-t-0 border-r-0 border-l-0 border-b-[1px] pb-[2.4rem] border-b-[#d2d2d7] border-solid">
                    {FOOTER_DATA.map((obj) => (
                        <ColumnCard obj={obj} />
                    ))}
                </div>
            </div>
            <Copyright />
        </div>
    );
};

export default Footer;
