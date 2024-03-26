import React from 'react';
import { StyledIntro } from './styles';
import Socials from '@/src/components/Socials';
import Background from '@/src/components/Background';
import IntroCard from '@/src/components/IntroCard';

const Intro = () => {
    return (
        <StyledIntro className="relative">
            <Background />
            <div className="absolute top-0 w-full h-full">
                <div className="flex flex-col justify-between h-full pt-32">
                    <div className="flex justify-center relative top-[20%]">
                        <IntroCard />
                    </div>
                    <div className="py-8 px-32 border-t-[1px] border-b-[1px] border-[#dcdbd6] border-solid bg-[#f9f6ef41]">
                        <Socials />
                    </div>
                </div>
            </div>
        </StyledIntro>
    );
};

export default Intro;
