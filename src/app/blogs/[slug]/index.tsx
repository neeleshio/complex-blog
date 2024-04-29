'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import Image, { ImageProps } from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Footer, Header } from '@/src/containers';
import { Provider } from 'react-redux';
import { store } from '@/src/store';
import SectionHeader from '@/src/components/SectionHeader';
import { ShareButtons } from '@/src/components';
import { FC } from 'react';
import { MDXComponents } from 'mdx/types';

type MergeComponents = /*unresolved*/ any;

type BlogPageProps = {
    source: string;
    components?: MDXComponents | MergeComponents | null | undefined;
    title: string;
    date: string;
    topic: string;
};

type ChildrenProp = {
    children: string;
};

const customStyle = {
    fontSize: '1.4rem',
    borderRadius: 6,
    boxShadow: '0px 0px 13px -1px rgba(88, 86, 86, 0.75)',
    margin: '2rem 0 4rem 0'
};

const components = {
    h1: ({ children }: ChildrenProp) => (
        <div className="mb-[2rem] sm:text-center">
            <h1 className="text-primary-color font-semibold text-[4.8rem] leading-[50px] md:text-[3.2rem] sm:leading-[40px]">
                {children}
            </h1>
        </div>
    ),
    blockquote: ({ children }: { children: [] }) => (
        <div className="mb-16 sm:text-center">
            <div className="text-[2.2rem] font-medium text-primary-color leading-[28px] md:text-[1.8rem] md:leading-[24px]">
                {children?.[1]?.['props']?.['children']}
            </div>

            <div className="mt-[3.2rem]">
                <ShareButtons />
            </div>
        </div>
    ),
    p: ({ children }: ChildrenProp) => (
        <p className="text-[1.7rem] text-primary-color mb-6 font-normal sm:text-[1.5rem]">
            {children}
        </p>
    ),
    code: ({ className, children }: { className: string; children: string }) => (
        <SyntaxHighlighter
            language={className.split('-')[1]}
            style={nightOwl}
            customStyle={customStyle}
            wrapLines>
            {children}
        </SyntaxHighlighter>
    ),
    img: (props: { src: string; alt: string }) => (
        <Image
            sizes="100vw"
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto', objectFit: 'cover', paddingBottom: '3rem' }}
            {...(props as ImageProps)}
        />
    ),
    li: ({ children }: ChildrenProp) => <li className="list-disc mx-16 mb-6">{children}</li>,
    h2: ({ children }: ChildrenProp) => (
        <h2 className="mb-10 mt-20 text-[#235bc1] text-[2.7rem] sm:text-[2.5rem] sm:mb-8">
            {children}
        </h2>
    ),
    h3: ({ children }: ChildrenProp) => <h3 className="mb-6 text-[2rem] font-bold">{children}</h3>
};

export function BlogPage(props: BlogPageProps) {
    return (
        <Provider store={store}>
            <Header />
            <SectionHeader title={props.title} />
            <div className="sm:text-center w-[98rem] m-auto px-32 pt-24 lg:w-[80rem] lg:px-24 ml:w-[75rem] ml:px-20 md:w-[60rem] md:px-14 sm:w-full sm:px-8">
                <div className="text-cgrey text-[1.2rem] font-semibold">
                    {props.topic.toUpperCase()}
                </div>
                <div className="text-cgrey text-[1.4rem] font-medium mt-[0.5rem]">{props.date}</div>
            </div>
            <div className="w-[98rem] m-auto px-32 pt-12 pb-24 lg:w-[80rem] lg:px-24 ml:w-[75rem] ml:px-20 md:w-[60rem] md:px-14 sm:w-full sm:px-8">
                <MDXRemote
                    source={props.source}
                    components={{ ...components, ...(props.components || {}) }}
                />
                <div className="mt-[10rem] mb-[6rem] flex">
                    <div className="mr-8">Share on</div>
                    <ShareButtons />
                </div>
                <hr />
            </div>
            <Footer />
        </Provider>
    );
}
