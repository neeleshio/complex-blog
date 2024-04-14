import React from 'react';

function Backdrop({ open, children }) {
    return (
        <div
            className={`h-screen w-screen fixed bg-backdrop-bg z-[998] nav-menu-backdrop ${open ? 'opacity-100 visible nav-menu-backdrop-open' : 'opacity-0 invisible nav-menu-backdrop-end'}`}>
            {children}
        </div>
    );
}

export default Backdrop;
