/* eslint-disable react/jsx-no-useless-fragment */
import { StaticImageData } from 'next/image';
import React from 'react';
import PreviousWork from './PreviousWork';
import LatestWork from './LatestWork';

type WorkCardProps = {
    company: string;
    designation: string;
    timeline: string;
    image: StaticImageData;
    latest: boolean;
    link: string;
    navigate: (link: string) => void;
};

const WorkCard = ({
    company,
    designation,
    timeline,
    image: Img,
    latest,
    link,
    navigate
}: WorkCardProps) => {
    return (
        <>
            {latest ? (
                <LatestWork
                    company={company}
                    designation={designation}
                    timeline={timeline}
                    Img={Img}
                    navigate={navigate}
                    link={link}
                />
            ) : (
                <PreviousWork
                    company={company}
                    designation={designation}
                    timeline={timeline}
                    Img={Img}
                    navigate={navigate}
                    link={link}
                />
            )}
        </>
    );
};

export default WorkCard;
