import React from 'react';

const Copyright = () => {
    return (
        <div className="my-2 text-footer-text-color text-[1.2rem] flex w-full justify-between sm:text-[0.9rem]">
            <div className="flex">
                <span>Copyright © 2024. All rights reserved.</span>
                <div className="text-footer-text-color">
                    <div>
                        <span className="border-t-0 border-b-0 border-l-0 border-r-[1px] border-b-[#424245] border-solid px-4">
                            Privacy Policy
                        </span>
                        <span className="px-4">Terms of Use</span>
                    </div>
                </div>
            </div>
            <div>
                <span>India</span>
            </div>
        </div>
    );
};

export default Copyright;
