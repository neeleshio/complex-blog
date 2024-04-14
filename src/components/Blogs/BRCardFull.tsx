import Image from 'next/image';
import React from 'react';
import img from '@/assets/images/blog/chrome.png';

const BRCardFull = () => {
    return (
        <div className="flex min-h-[36rem] w-full">
            <div className="bg-black w-[65%] rounded-l-[16px] flex justify-center items-center">
                <Image src={img} width={320} />
            </div>
            <div className="w-[35%] p-[3.2rem] rounded-r-[16px] bg-white flex flex-col justify-between">
                <div>
                    <span className="text-[#6e6e73] text-[1.2rem] font-semibold">REACT</span>
                    <h1 className="text-[3.2rem] mt-4">
                        Apple’s Worldwide Developers Conference returns June 10, 2024
                    </h1>
                </div>
                <div className="text-[#6e6e73] text-[1.4rem] font-semibold">11 April 2024</div>
            </div>
        </div>
    );
};

export default BRCardFull;
