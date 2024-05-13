import React from 'react';
import CustomScroll from '@/src/components/CustomScroll';
import { BLOGS } from '@/src/data';
import useOpenLink from '@/src/hooks/useOpenLink';
import ArticleCard from '@/src/components/ArticleCard';
import SectionHeading from '@/src/components/SectionHeading';

const Articles = () => {
    const { navigate } = useOpenLink();

    return (
        <section>
            <div className="pt-[5.4rem] overflow-hidden">
                <SectionHeading title="Blog." subtitle="Top blog posts I recently published." />
                <CustomScroll height={24}>
                    {BLOGS.map((el) => (
                        <ArticleCard {...el} navigate={navigate} />
                    ))}
                </CustomScroll>
            </div>
        </section>
    );
};

export default Articles;
