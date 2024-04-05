import React, { useState, useEffect, useRef } from 'react';
import CustomArrow from './CustomArrow';

type CustomScrollProps = {
    children: React.ReactNode;
    height: number;
};

const CustomScroll = ({ children, height }: CustomScrollProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [mouseOver, setMouseOver] = useState(false);
    const [scrollCapture, setScrollCapture] = useState(0);
    const [leftArrow, setLeftArrow] = useState(false);
    const [rightArrow, setRightArrow] = useState(false);

    const handleScroll = (position: string) => {
        if (scrollRef.current) {
            if (position === 'right') {
                scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + 440;
            } else {
                scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - 440;
            }
        }
    };

    useEffect(() => {
        if (mouseOver && scrollRef.current) {
            let { scrollLeft, offsetWidth, scrollWidth } = scrollRef.current;

            const scrollEnd = scrollWidth - offsetWidth; //offsetWidth = screen width

            if (scrollLeft === scrollEnd) {
                setRightArrow(false);
                setLeftArrow(true);
            }

            if (scrollLeft === 0) {
                setRightArrow(true);
                setLeftArrow(false);
            }

            if (scrollLeft > 140 && scrollLeft < scrollEnd) {
                setRightArrow(true);
                setLeftArrow(true);
            }
        } else {
            setRightArrow(false);
            setLeftArrow(false);
        }
    }, [mouseOver, scrollCapture]);

    return (
        <div
            className="relative"
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onScrollCapture={() => setScrollCapture((prev) => prev + 1)}>
            <div
                className="flex overflow-x-scroll overflow-y-hidden w-screen pt-[1.6rem]"
                ref={scrollRef}>
                <DummyCard height={height}>{children}</DummyCard>
            </div>

            <CustomArrow
                handleScroll={handleScroll}
                leftArrow={leftArrow}
                rightArrow={rightArrow}
            />
        </div>
    );
};

const DummyCard = ({ children, height }: CustomScrollProps) => {
    return (
        <>
            <div className={`min-w-[14rem] h-[${height}rem]`} />
            {children}
            <div className={`min-w-[14rem] h-[${height}rem]`} />
        </>
    );
};

export default CustomScroll;