import Arrow from '@/assets/images/svg/Arrow';
import React from 'react';

type CustomArrowProps = {
    handleScroll: (position: string) => void;
    leftArrow: boolean;
    rightArrow: boolean;
};

const CustomArrow = ({ handleScroll, leftArrow, rightArrow }: CustomArrowProps) => {
    return (
        <>
            <div
                className={`left-scroll-btn trans absolute left-0 ml-8 top-[calc(50%_-_25px)] z-10 ${
                    leftArrow ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ rotate: '180deg' }}>
                <button
                    onClick={() => handleScroll('left')}
                    className="bg-[#d2d2d7e8] hover:bg-[#dedee3] rounded-full border-0 w-20 h-20 opacity-80 flex justify-center items-center cursor-pointer"
                    disabled={!leftArrow}>
                    <Arrow />
                </button>
            </div>
            <div
                className={`left-scroll-btn trans absolute right-0 mr-8 bottom-[calc(50%_-_25px)] z-10 ${
                    rightArrow ? 'opacity-100' : 'opacity-0'
                }`}>
                <button
                    onClick={() => handleScroll('right')}
                    className="bg-[#d2d2d7e8] hover:bg-[#dedee3] rounded-full border-0 w-20 h-20 opacity-80 flex justify-center items-center cursor-pointer"
                    disabled={!rightArrow}>
                    <Arrow />
                </button>
            </div>
        </>
    );
};

export default CustomArrow;
