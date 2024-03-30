import React from 'react';
import { SKILLS } from '@/src/data';
import SkillCard from '@/src/components/SkillCard';

const Skills = () => {
    return (
        <div className="pl-10 pr-0 pb-4 flex mb-40 md:px-28 xl:px-56 overflow-x-auto">
            {SKILLS.map((el) => (
                <SkillCard {...el} />
            ))}
        </div>
    );
};

export default Skills;
