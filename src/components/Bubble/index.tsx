import React from 'react';

const Bubble = ({ title }: { title: string }) => {
    return (
        <div className="inline bg-cgrey py-4 rounded-full capitalize text-invert-primary text-[1.3rem] px-6">
            {title}
        </div>
    );
};

export default Bubble;
