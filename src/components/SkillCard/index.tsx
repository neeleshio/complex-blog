import React from 'react';

type SkillCardProps = {
    name: string;
    icon: React.FC;
    dark: boolean;
};

const SkillCard = ({ name, icon: Icon, dark }: SkillCardProps) => {
    return (
        <div
            className="flex flex-col items-center justify-end flex-shrink-0 mr-20 sm:mr-12 mb-8"
            aria-label="skill-card">
            <div className="w-24 h-[8rem] flex justify-center items-center">
                <Icon dark={dark} />
            </div>
            <span className="font-semibold text-[1.2rem]">{name}</span>
        </div>
    );
};

export default SkillCard;
