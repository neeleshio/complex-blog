import BlogCardSmallInvert from '@/src/components/BlogCards/BlogCardSmallInvert';
import Bubble from '@/src/components/Bubble';
import { TOPICS } from '@/src/constants';
import { BLOG_DATA } from '@/src/data/blogdata';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type BlogDataTypes = {
    id: number;
    title: string;
    topic: string;
    link: string;
    tags: string[];
    date: string;
    img: string;
};

const AllBlogs = () => {
    const router = useRouter();
    const [topics, setTopics] = useState({});
    const [blogData, setBlogData] = useState<BlogDataTypes[]>([]);
    const [activeFilters, setActiveFilters] = useState(['All']);

    useEffect(() => {
        setBlogData([...BLOG_DATA]);
        const obj: { [key: string]: boolean } = { All: true };

        Object.values(TOPICS).map((el) => {
            obj[el] = false;
        });

        setTopics(obj);
    }, []);

    useEffect(() => {
        let arr: BlogDataTypes[] = [];

        activeFilters.map((filter) => {
            BLOG_DATA.map((el) => {
                if (el.topic === filter) {
                    arr.push(el);
                }
            });
        });

        if (activeFilters.includes('All') && activeFilters.length === 1) {
            arr = [...BLOG_DATA];
        }

        if (arr.length > 0) {
            setBlogData(arr);
        }
    }, [activeFilters]);

    const handleFilter = (value: string) => {
        const copyTopics: { [key: string]: boolean } = { ...topics };
        let copyActiveFilters = [...activeFilters];

        copyTopics[value] = !copyTopics[value];

        if (value === 'All') {
            if (copyActiveFilters.includes(value) && copyActiveFilters.length === 1) {
                copyTopics[value] = true;
            } else {
                Object.keys(copyTopics).map((el) => {
                    copyTopics[el] = false;
                    copyActiveFilters = ['All'];
                });
                copyTopics[value] = true;
            }
        }

        if (value !== 'All') {
            copyTopics['All'] = false;

            if (copyActiveFilters.includes(value)) {
                const filtered = copyActiveFilters.filter((el) => el !== value);
                copyActiveFilters = filtered;
            } else {
                copyActiveFilters.push(value);
            }

            if (copyActiveFilters.includes('All') && copyActiveFilters.length === 1) {
                copyTopics['All'] = true;
            }
        }

        setActiveFilters(copyActiveFilters);
        setTopics(copyTopics);
    };

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
                        {blogData?.map((el) => (
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
                        <p className="font-medium">Filter by Topics</p>

                        <div className="mt-[3rem] flex flex-col gap-8">
                            {Object.entries(topics).map(([key, value]) => (
                                <div
                                    key={key}
                                    onClick={() => handleFilter(key)}
                                    className="flex items-center cursor-pointer"
                                    onKeyDown={() => handleFilter(key)}
                                    tabIndex={0}
                                    aria-checked="mixed"
                                    role="checkbox">
                                    <input
                                        id={key}
                                        type="checkbox"
                                        value={key}
                                        className=" text-blue-600 bg-gray-100 border-gray-300 rounded"
                                        checked={Boolean(value)}
                                    />
                                    <span className="ms-2 font-medium text-invert-secondary text-[1.3rem]">
                                        {key}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default AllBlogs;
