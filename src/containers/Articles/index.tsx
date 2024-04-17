import React from 'react';
import CustomScroll from '@/src/components/CustomScroll';
import { BLOGS } from '@/src/data';
import useOpenLink from '@/src/hooks/useOpenLink';
import ArticleCard from '@/src/components/ArticleCard';

const Articles = () => {
    const { navigate } = useOpenLink();

    return (
        <div>
            <div className="pt-[5.4rem] overflow-hidden">
                <div className="text-[2.8rem] font-semibold px-56 xl:px-28 lg:px-14">
                    <h2 className="inline text-[2.8rem] font-semibold">Blog.</h2>
                    <span className="text-cgrey pl-2">
                        Current and previous companies I worked for.
                    </span>
                </div>
                <CustomScroll height={24}>
                    {BLOGS.map((el) => (
                        <ArticleCard {...el} navigate={navigate} />
                    ))}
                </CustomScroll>
            </div>
        </div>
    );
};

export default Articles;
