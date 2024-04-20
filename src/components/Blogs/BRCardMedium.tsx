import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BRCardMedium = ({ title, topic, link, date, img }) => {
    return (
        <Link href={link} className="bg-white rounded-[16px]">
            <div className="h-[17rem] relative">
                <Image src={img} fill className="object-cover rounded-t-[16px] absolute" />
            </div>
            <div className="flex flex-col p-[1.7rem] justify-between">
                <div>
                    <div className="text-[1.2rem] mb-4 font-semibold text-[#6e6e73]">{topic}</div>
                    <div className="text-[1.9rem] font-semibold">{title}</div>
                </div>
                <div className="text-[1.4rem] mt-5 font-semibold text-[#6e6e73]">{date}</div>
            </div>
        </Link>
    );
};

export default BRCardMedium;
