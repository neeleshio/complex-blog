import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';
import rreact from '../../../assets/images/png/react-l.png';

type SkillCardProps = {
    name: string;
    Icon: React.FC;
};

const SkillCard = ({ name, Icon }: SkillCardProps) => {
    return (
        <div className="flex flex-col items-center justify-end flex-shrink-0 mr-20">
            <div className="w-24 h-[8rem] flex justify-center items-center">
                <Icon />
            </div>
            <span className="font-semibold text-[1.2rem]">{name}</span>
        </div>
    );
};

export default SkillCard;
