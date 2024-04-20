import { BRCardFull } from '@/src/components/Blogs';
import BRCardLarge from '@/src/components/Blogs/BRCardLarge';
import BRCardMedium from '@/src/components/Blogs/BRCardMedium';
import BRCardSmall from '@/src/components/Blogs/BRCardSmall';
import { BLOG_DATA, LATEST_BLOG } from '@/src/data/blogdata';
import React from 'react';

const Blogs = () => {
    return (
        <section className="flex flex-col justify-center items-center">
            <section className="w-[98rem] pt-10 mt-10 mb-32 lg:w-[80rem] ml:w-[75rem] md:w-[55rem] sm:w-full px-6">
                <h2 className="text-[3rem] mb-[2.4rem] ml:text-[2.8rem] ml:mb-[1.6rem]">
                    Latest Blogs
                </h2>
                <BRCardFull {...LATEST_BLOG} />
                <div className="gap-16 mt-16 grid-cols-2 grid md:grid-cols-1 ml:mt-6 sm:px-0">
                    {BLOG_DATA.slice(0, 4).map((el) => (
                        <BRCardLarge {...el} />
                    ))}
                </div>
                <div className="grid gap-16 mt-16 grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {BLOG_DATA.slice(0, 6).map((el) => (
                        <BRCardMedium {...el} />
                    ))}
                </div>
            </section>
            <section className="bg-[#ffffff] w-full ">
                <div className="py-[8rem] w-[98rem] m-auto lg:w-[80rem] ml:w-[75rem] md:w-[55rem] sm:w-full px-6">
                    <h2 className="text-[3.2rem] mb-[4rem]">More from Blog Wall</h2>
                    <div>
                        <div>
                            <div className="flex gap-24 my-[3.2rem] md:flex-col">
                                <BRCardSmall />
                                <BRCardSmall />
                            </div>
                            <hr className="text-[#d0d0d0]" />
                        </div>
                        <div>
                            <div className="flex gap-24 my-[3.2rem] md:flex-col">
                                <BRCardSmall />
                                <BRCardSmall />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Blogs;
