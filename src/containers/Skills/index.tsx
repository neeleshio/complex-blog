import React from 'react';
import SkillCard from '@/src/components/SkillCard';
import { SKILLS } from '@/src/data';
import CustomScroll from '@/src/components/CustomScroll';
import { useSelector } from 'react-redux';
import { themeSelector } from '@/src/store/slices/themeSlice';

const Skills = () => {
    const { dark } = useSelector(themeSelector);

    return (
        <section className="mb-[10rem] md:mb-24">
            <CustomScroll height={9.4}>
                {SKILLS.map((el) => (
                    <SkillCard {...el} dark={dark} />
                ))}
            </CustomScroll>
        </section>
    );
};

export default Skills;
