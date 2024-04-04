import React from 'react';
import SkillCard from '@/src/components/SkillCard';
import { SKILLS } from '@/src/data';

const Skills = () => {
    return (
        <div className="pr-0 pb-4 flex mb-40 mx-56">
            {SKILLS.map((el) => (
                <SkillCard {...el} />
            ))}
        </div>
    );
};

export default Skills;
