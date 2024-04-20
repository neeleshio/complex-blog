import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BRCardLarge = ({ title, topic, link, date, img }) => {
    return (
        <Link
            className="bg-white rounded-[16px] block w-full shadow-[2px_4px_12px_#00000014] hover:shadow-[2px_4px_16px_#00000029]"
            href={`/blogs/${link}`}>
            <div className="h-[26rem] relative lg:h-[22rem] ml:h-[18rem]">
                <Image src={img} fill className="rounded-t-[16px] object-cover absolute" />
            </div>
            <div className="flex flex-col p-[3.2rem] justify-between ml:p-[2.4rem]">
                <div>
                    <div className="text-[1.2rem] mb-4 font-semibold text-[#6e6e73]">
                        {topic.toUpperCase()}
                    </div>
                    <div className="text-[2.2rem] font-semibold ml:text-[1.9rem]">{title}</div>
                </div>
                <div className="text-[1.4rem] mt-5 font-semibold text-[#6e6e73]">{date}</div>
            </div>
        </Link>
    );
};

export default BRCardLarge;
