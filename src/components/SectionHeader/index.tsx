import React from 'react';

const SectionHeader = ({ title }) => {
    return (
        <header className="py-[1.2rem] bg-blur sticky top-0 w-full z-[998]">
            <div className="max-w-[98rem] m-auto flex items-center">
                <h1 className="text-[2rem] font-semibold pl-6">{title}</h1>
                <div></div>
            </div>
        </header>
    );
};

export default SectionHeader;
