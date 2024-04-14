'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import Image, { ImageProps } from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Header } from '@/src/containers';
import { Provider } from 'react-redux';
import { store } from '@/src/store';
import SectionHeader from '@/src/components/SectionHeader';

const customStyle = {
    fontSize: '1.4rem',
    borderRadius: 6,
    boxShadow: '0px 0px 43px -1px rgba(0,0,0,0.75)'
};

const components = {
    h1: ({ children }) => (
        <h1 className="text-[#fcff63] font-semibold text-[4.8rem]" style={{ margin: 20 }}>
            {children}
        </h1>
    ),
    p: ({ children }) => <p className="text-[1.7rem] text-[#1d1d1f]">{children}</p>,
    code: ({ children }) => (
        <SyntaxHighlighter
            language="javascript"
            style={nightOwl}
            customStyle={customStyle}
            wrapLines>
            {children}
        </SyntaxHighlighter>
    ),
    img: (props) => (
        <Image
            sizes="100vw"
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            {...(props as ImageProps)}
        />
    )
};

export function CustomMDX(props) {
    return (
        <Provider store={store}>
            <Header />
            <SectionHeader />
            <div>
                <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
            </div>
        </Provider>
    );
}
