'use client';

import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/src/store';
import { Blogs, Footer, Header } from '@/src/containers';
import Image from 'next/image';
import img from '@/public/arrow-functions.png';
import { BLOG_DATA } from '../data/blogdata';
import { BlogCardSmall } from '../components/BlogCards';
import { useRouter } from 'next/navigation';
import BlogCardSmallInvert from '../components/BlogCards/BlogCardSmallInvert';

export default function AllBlogsPage() {
    const router = useRouter();
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const arr = [];

        BLOG_DATA.map((el) => {
            arr.push(...el.tags);
        });

        const a = new Set(arr);
        setTopics([...a]);
    }, []);

    return (
        <Provider store={store}>
            <Header />
            <section className="flex flex-col justify-center items-center">
                <section className="w-[98rem] pt-10 mt-10 mb-32 lg:w-[80rem] ml:w-[75rem] md:w-[55rem] sm:w-full px-6 flex flex-col">
                    <div className="border border-blog-border-color border-solid border-t-0 border-r-0 border-l-0">
                        <h2 className="text-[3rem] mb-[2.4rem] ml:text-[2.8rem] ml:mb-[1.6rem]">
                            All Blogs
                        </h2>
                    </div>
                    <div className="flex mt-16 md:flex-col-reverse">
                        <div className="w-[70%] pr-20 border border-blog-border-color border-solid border-t-0 border-b-0 border-l-0 md:w-full md:border-none md:pr-0 lg:pr-0">
                            {BLOG_DATA.slice(1, 7).map((el, idx) => (
                                <div
                                    className="pt-2 pb-[2.7rem] pr-[5rem] border-blog-border-color mb-[2rem] md:pr-0"
                                    style={{
                                        borderBottomWidth: '1px',
                                        borderBottomStyle: 'solid'
                                    }}>
                                    <BlogCardSmallInvert {...el} router={router} />
                                </div>
                            ))}
                        </div>
                        <div className="w-[30%] pt-4 pl-[3.2rem] md:w-full md:pl-0 md:pb-[4rem]">
                            <p className="font-medium">Recommended Topics</p>

                            <div className="mt-[3rem] flex flex-wrap gap-4">
                                {topics.length > 0 &&
                                    topics.map((el) => (
                                        <div className="inline bg-cgrey py-4 rounded-full capitalize text-invert-primary text-[1.3rem] px-6">
                                            {el}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <Footer />
        </Provider>
    );
}
