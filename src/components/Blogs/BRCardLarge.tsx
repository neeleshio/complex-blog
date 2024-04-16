import Image from 'next/image';
import React from 'react';

const BRCardLarge = ({ title, topic, link, date, img }) => {
    return (
        <a className="bg-white rounded-[16px] block w-full" href={`/blogs/${link}`}>
            <div className="h-[26rem]">
                <Image
                    src={img}
                    width={474}
                    height={260}
                    className="rounded-t-[16px] object-cover"
                />
            </div>
            <div className="flex flex-col p-[3.2rem] justify-between">
                <div>
                    <div className="text-[1.2rem] mb-4 font-semibold text-[#6e6e73]">
                        {topic.toUpperCase()}
                    </div>
                    <div className="text-[2.2rem] font-semibold">{title}</div>
                </div>
                <div className="text-[1.4rem] mt-5 font-semibold text-[#6e6e73]">{date}</div>
            </div>
        </a>
    );
};

export default BRCardLarge;
