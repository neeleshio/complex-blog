import Image from 'next/image';
import React, { FC } from 'react';
import displayPic from '../../../assets/images/png/display-pic.jpg';

type SocialsProps = {
    SOCIALS: SocialItem[];
};

type SocialItem = {
    id: string;
    icon: FC;
    link: string;
};

const Socials = ({ SOCIALS }: SocialsProps) => {
    return (
        <section className="max-w-72">
            <div className="flex items-center pb-7 lg:hidden">
                <div className="rounded-full overflow-hidden w-[40px] h-[40px]">
                    <Image alt="display-pic" src={displayPic} width={40} height={40} />
                </div>
                <div className="flex flex-col pl-4 text-[1.4rem]">
                    <span className="leading-8 font-semibold">Want to connect?</span>
                    <a href="mailto:neeleshiodev@gmail.com" className="text-[#0066cc]">
                        Send a mail
                    </a>
                </div>
            </div>
            <div className="flex justify-around items-center lg:gap-4">
                {SOCIALS.map(({ id, icon: Icon, link }: SocialItem) => (
                    <a key={id} href={link} target="_blank">
                        <Icon />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Socials;
