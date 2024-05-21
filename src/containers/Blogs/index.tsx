import React from 'react';
import {
    BlogCardFull,
    BlogCardLarge,
    BlogCardMedium,
    BlogCardSmall
} from '@/src/components/BlogCards';
import { BLOG_DATA, LATEST_BLOG } from '@/src/data/blogdata';
import { useRouter } from 'next/navigation';

const Blogs = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col justify-center items-center">
            <section className="w-[98rem] pt-10 mt-10 mb-32 lg:w-[80rem] ml:w-[75rem] md:w-[55rem] sm:w-full px-6">
                <h2 className="text-[3rem] mb-[2.4rem] ml:text-[2.8rem] ml:mb-[1.6rem]">
                    Latest Blogs
                </h2>
                <BlogCardFull {...LATEST_BLOG} router={router} />
                <div className="gap-16 mt-16 grid-cols-2 grid md:grid-cols-1 ml:mt-6 sm:px-0">
                    {BLOG_DATA.slice(0, 4).map((el) => (
                        <BlogCardLarge {...el} router={router} />
                    ))}
                </div>
                <div className="grid gap-16 mt-16 grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {BLOG_DATA.slice(4, 10).map((el) => (
                        <BlogCardMedium {...el} router={router} />
                    ))}
                </div>
            </section>
            <section className="bg-project-card-bg w-full ">
                <div className="py-[7rem] w-[98rem] m-auto lg:w-[80rem] ml:w-[75rem] md:w-[55rem] sm:w-full px-6">
                    <h2 className="text-[3.2rem] mb-[4rem] ml:text-[2.8rem] ml:mb-[1.6rem]">
                        More from Blog Wall
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-1">
                        {BLOG_DATA.slice(10, 16).map((el) => (
                            <div className="py-[3.2rem] border-bottom pr-[5rem]" key={el.id}>
                                <BlogCardSmall {...el} router={router} />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-[#0171E2] text-[1.4rem] text-[#ffffff] px-10 py-5 rounded-full mt-8 shadow-[2px_4px_12px_#00000014] hover:shadow-[2px_4px_16px_#00000029] cursor-pointer custom-transform">
                            <a href="/all">View All</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
