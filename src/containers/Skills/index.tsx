import React from 'react';
import SkillCard from '@/src/components/SkillCard';
import { SKILLS } from '@/src/data';
import CustomScroll from '@/src/components/CustomScroll';

const Skills = () => {
    return (
        <CustomScroll height={9.4}>
            {SKILLS.map((el) => (
                <SkillCard {...el} />
            ))}
        </CustomScroll>
    );
};

export default Skills;
