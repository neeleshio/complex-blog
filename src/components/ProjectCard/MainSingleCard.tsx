import React from 'react';
import Image from 'next/image';

const MainSingleCard = ({ chattodopic }) => {
    return (
        <div className="rounded-[18px] w-[40rem] h-[40rem] shadow-[2px_4px_12px_#00000014] relative mr-8 hover:shadow-[2px_4px_16px_#00000029] cursor-pointer custom-transform">
            <div>
                <Image
                    src={chattodopic}
                    width={400}
                    height={400}
                    className="rounded-[18px] object-cover"
                />
            </div>
            <div className="absolute top-0 flex flex-col p-12">
                <span className="text-[2rem] font-normal">
                    The best method to acquire any skill is to put it into practice by working on
                    projects.
                </span>
            </div>
        </div>
    );
};

export default MainSingleCard;
