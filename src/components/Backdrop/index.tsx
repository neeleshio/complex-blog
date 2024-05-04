import React, { ReactNode } from 'react';

type BackdropProps = {
    open: boolean;
    children: ReactNode;
};

const Backdrop = ({ open, children }: BackdropProps) => {
    return (
        <div
            className={`h-screen w-screen fixed bg-backdrop-bg z-[999] nav-menu-backdrop ${open ? 'opacity-100 visible nav-menu-backdrop-open' : 'opacity-0 invisible nav-menu-backdrop-end'}`}>
            {children}
        </div>
    );
};

export default Backdrop;
