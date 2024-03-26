import React from 'react';
import { StyledExperience } from './styles';
import Tiles from '@/src/components/Tiles';
import Bars from '@/src/images/svg/Bars';
import { WORK_HISTORY } from '../../../data';

const Experience = () => {
    return (
        <StyledExperience id="experience">
            <div className="w-full h-full pb-32">
                <div className="container">
                    <div className="heading">
                        <span> Work History</span>
                        <Bars />
                    </div>

                    <div className="tiles-container">
                        {WORK_HISTORY.map((el) => (
                            <Tiles {...el} />
                        ))}
                    </div>
                </div>
            </div>
        </StyledExperience>
    );
};

export default Experience;
