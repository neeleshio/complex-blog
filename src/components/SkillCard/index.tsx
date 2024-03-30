import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';
import rreact from '../../../assets/images/png/react-l.png';

type SkillCardProps = {
    name: string;
    Icon: React.FC;
};

const SkillCard = ({ name, Icon }: SkillCardProps) => {
    return (
        <div className="flex flex-col items-center w-52 flex-shrink-0">
            <Icon />
            <span className="font-semibold text-[1.2rem] pt-3">{name}</span>
        </div>
    );
};

export default SkillCard;
