import React from 'react';

type RibbonProps = {
    totalExp: number;
};

const Ribbon = ({ totalExp }: RibbonProps) => {
    return (
        <div className="ribbon-drop-wrapper mt-[4.5rem]">
            <div className="ribbon">
                <span className="text-[1.4rem] flex justify-center items-center py-6 font-light">
                    Total experience of{' '}
                    <span className="font-semibold">&nbsp;{totalExp}&nbsp;</span>years in building
                    scalable frontend applications.
                </span>
            </div>
        </div>
    );
};

export default Ribbon;
