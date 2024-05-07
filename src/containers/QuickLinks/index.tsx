import { QUICK_LINKS } from '@/src/data';
import Link from 'next/link';
import React from 'react';

const QuickLinks = () => {
    return (
        <section className="mx-56 py-16 xl:mx-28 lg:mx-14 sm:mx-7">
            <h2 className="text-[2.8rem] font-semibold pb-8 sm:text-[2.1rem]">Quick Links</h2>

            <div className="flex">
                <ul className="text-[1.4rem] flex sm:text-[1.2rem]">
                    {QUICK_LINKS.map(({ id, name, link }) => (
                        <li
                            className="border px-6 py-3 border-current border-solid rounded-full mr-4"
                            key={id}>
                            <Link href={link} target="_blank">
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default QuickLinks;
