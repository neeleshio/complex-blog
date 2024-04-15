'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import Image, { ImageProps } from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Header } from '@/src/containers';
import { Provider } from 'react-redux';
import { store } from '@/src/store';
import SectionHeader from '@/src/components/SectionHeader';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoIosMail, IoIosLink } from 'react-icons/io';

const customStyle = {
    fontSize: '1.4rem',
    borderRadius: 6,
    boxShadow: '0px 0px 43px -1px rgba(88, 86, 86, 0.75)',
    margin: '4rem 0'
};

const components = {
    h1: ({ children }) => (
        <div className="mb-[2rem]">
            <div className="mb-12">
                <div className="text-[#6e6e73] text-[1.2rem] font-semibold">JAVASCRIPT</div>
                <div className="text-[#6e6e73] text-[1.4rem] font-medium mt-[0.5rem]">
                    04 March 2024
                </div>
            </div>
            <h1 className="text-[#1d1d1f] font-semibold text-[4.8rem] leading-[50px]">
                {children}
            </h1>
        </div>
    ),
    blockquote: ({ children }) => (
        <div className="mb-16">
            <div className="text-[2.2rem] font-medium text-[#1d1d1f] leading-[28px]">
                {children?.[1]?.['props']?.['children']}
            </div>

            <div>
                <div className="mt-[3.2rem] blog-share">
                    <button>
                        <FaWhatsapp />
                    </button>
                    <button>
                        <FaXTwitter />
                    </button>
                    <button>
                        <IoIosMail />
                    </button>
                    <button>
                        <IoIosLink />
                    </button>
                </div>
            </div>
        </div>
    ),
    p: ({ children }) => <p className="text-[1.7rem] text-[#1d1d1f] mb-6">{children}</p>,
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
            style={{ width: '100%', height: 'auto', objectFit: 'cover', paddingBottom: '3rem' }}
            {...(props as ImageProps)}
        />
    ),
    li: ({ children }) => <li className="list-disc mx-16 mb-6">{children}</li>,
    h2: ({ children }) => <h2 className="mb-10 mt-10 text-[#235bc1] text-[2.7rem]">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-6 text-[2rem]">{children}</h3>
};

export function CustomMDX(props) {
    return (
        <Provider store={store}>
            <Header />
            <SectionHeader />
            <div className="w-[98rem] m-auto px-32 py-24">
                <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
            </div>
        </Provider>
    );
}
