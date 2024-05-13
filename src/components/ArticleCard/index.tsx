import React from 'react';

type ArticleCardProps = {
    title: React.ReactNode;
    image: React.FC;
    link: string;
    navigate: (link: string) => void;
};

const ArticleCard = ({ title, image: Icon, link, navigate }: ArticleCardProps) => {
    return (
        <div
            className="flex flex-col justify-start rounded-[18px] min-w-[31rem] max-w-[31rem] h-[24rem] bg-white shadow-[2px_4px_12px_#00000014] mr-8 my-8 px-12 pt-16 hover:shadow-[2px_4px_16px_#00000029] cursor-pointer custom-transform"
            role="link"
            tabIndex={0}
            onClick={() => navigate(link)}
            onKeyDown={(e) => e.key === 'Enter' && navigate(link)}>
            <div className="h-[5rem]">
                <Icon />
            </div>

            <div className="text-[2.4rem] font-semibold text-[#1d1d1f]">{title}</div>
        </div>
    );
};

export default ArticleCard;
