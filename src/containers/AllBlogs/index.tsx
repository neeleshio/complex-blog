import BlogCardSmallInvert from '@/src/components/BlogCards/BlogCardSmallInvert';
import Bubble from '@/src/components/Bubble';
import { BLOG_DATA } from '@/src/data/blogdata';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const AllBlogs = () => {
    const router = useRouter();
    const [topics, setTopics] = useState<string[]>([]);

    useEffect(() => {
        const arr: string[] = [];

        BLOG_DATA.map((el) => {
            arr.push(...el.tags);
        });

        const uniqueSet = new Set(arr);
        setTopics(Array.from(uniqueSet));
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <section className="w-[98rem] pt-10 mt-10 mb-32 lg:w-[80rem] ml:w-[75rem] md:w-[55rem] sm:w-full px-6 flex flex-col">
                <div className="border border-blog-border-color border-solid border-t-0 border-r-0 border-l-0">
                    <h2 className="text-[3rem] mb-[2.4rem] ml:text-[2.8rem] ml:mb-[1.6rem]">
                        All Blogs
                    </h2>
                </div>
                <div className="flex mt-16 md:flex-col-reverse">
                    <div className="w-[70%] pr-20 flex flex-col-reverse border border-blog-border-color border-solid border-t-0 border-b-0 border-l-0 md:w-full md:border-none md:pr-0 lg:pr-0">
                        {BLOG_DATA.map((el) => (
                            <div
                                className="pt-2 pb-[2.7rem] pr-[5rem] border-blog-border-color mb-[2rem] md:pr-0"
                                style={{
                                    borderBottomWidth: '1px',
                                    borderBottomStyle: 'solid'
                                }}
                                key={el.id}>
                                <BlogCardSmallInvert {...el} router={router} />
                            </div>
                        ))}
                    </div>
                    <aside className="w-[30%] pt-4 pl-[3.2rem] md:w-full md:pl-0 md:pb-[4rem]">
                        <p className="font-medium">Recommended Topics</p>

                        <div className="mt-[3rem] flex flex-wrap gap-4">
                            {topics.length > 0
                                ? topics.map((el, idx) => (
                                      <div
                                          className="inline bg-cgrey py-4 rounded-full capitalize text-invert-primary text-[1.3rem] px-6"
                                          key={idx}>
                                          {el}
                                      </div>
                                  ))
                                : null}
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default AllBlogs;
