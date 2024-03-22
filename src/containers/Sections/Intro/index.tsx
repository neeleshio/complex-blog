import React from 'react';
import { StyledIntro } from './styles';
import Socials from '@/src/components/Socials';
import Banner from '@/src/components/Banner';
import Seal from '@/src/components/Seal';
import Designation from '@/src/components/Designation';
import ProfileCard from '@/src/components/ProfileCard';
import ThemeBtn from '@/src/components/ThemeBtn';

const Intro = () => {
    return (
        <StyledIntro>
            <div className="flex px-32">
                <div className="w-[35%] pe-32 flex flex-col justify-between">
                    {/* <ProfileCard /> */}
                    <div className="flex justify-center">{/* <ThemeBtn /> */}</div>
                </div>
                <div className="flex flex-col w-[65%]">
                    {/* <Designation /> */}
                    <div className="flex justify-between items-center gap-20">
                        <div className="max-w-[80%]">{/* <Banner /> */}</div>
                        <div className="w-1/5">
                            <Seal />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-8 px-32 border-t-[1px] border-b-[1px] border-[#dcdbd6] border-solid bg-[#f9f6ef]">
                <Socials />
            </div>
        </StyledIntro>
    );
};

export default Intro;
