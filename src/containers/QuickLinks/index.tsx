import { QUICK_LINKS } from '@/src/data';
import useOpenLink from '@/src/hooks/useOpenLink';
import Link from 'next/link';
import React from 'react';

const QuickLinks = () => {
    return (
        <div className="mx-56 py-16">
            <h2 className="text-[2.8rem] font-semibold pb-8">Quick Links</h2>

            <div className="flex">
                <ul className="text-[1.4rem] flex">
                    {QUICK_LINKS.map(({ name, link }) => (
                        <li className="border px-6 py-3 border-current border-solid rounded-full mr-4">
                            <Link href={link}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default QuickLinks;
