import React from 'react';

type ProjectCardProps = {
    name: string;
    image: React.FC;
    description: string;
    stack: React.FC[];
    latest: boolean;
    link: string;
    navigate: (link: string) => void;
};

const ProjectCard = ({
    name,
    image: Image,
    description,
    stack,
    latest,
    link,
    navigate
}: ProjectCardProps) => {
    return (
        <div
            className="flex flex-col justify-center rounded-[18px] min-w-[31rem] h-[40rem] bg-project-card-bg shadow-[2px_4px_12px_#00000014] mr-8 p-12 pt-20 my-8 hover:shadow-[2px_4px_16px_#00000029] cursor-pointer custom-transform"
            role="link"
            tabIndex={0}
            onClick={() => navigate(link)}
            onKeyDown={(e) => e.key === 'Enter' && navigate(link)}>
            <div className="flex flex-col justify-start h-full items-center max-h-[30rem]">
                <Image />

                <div className="project-svg-cont flex justify-center gap-4 mt-16">
                    {stack.map((Icon) => (
                        <Icon />
                    ))}
                </div>
            </div>

            <div className="flex flex-col">
                <span className="text-[#b64400] text-[1.2rem] font-light pb-4">
                    {latest ? 'New' : ''}
                </span>
                <span className="text-[1.7rem] text-invert-secondary font-semibold pb-4">
                    {name}
                </span>
                <span className="text-[1.4rem] text-invert-secondary font-light">
                    {description}
                </span>
            </div>
        </div>
    );
};

export default ProjectCard;
