import React from 'react';
import { StyledEcosystem } from './styles';
import Capsule from '@/src/components/Capsule';
import ReactLogo from '../../../images/svg/ReactLogo';
import Js from '@/src/images/svg/Js';
import NextLogo from '@/src/images/svg/NextLogo';
import { SKILLS } from '@/src/data';

const Ecosystem = () => {
    return (
        <StyledEcosystem id="ecosystem">
            <div className="background">
                <div className="heading-1">
                    <div className="stroke">My Tech</div>
                    <span>Tech</span>
                </div>
                <div className="heading-2">
                    <div className="stroke">Ecosystem</div>
                    <span>Ecosystem</span>
                </div>
            </div>
            <div className="capsules-container">
                {SKILLS.map((el) => (
                    <Capsule {...el} />
                ))}
            </div>
        </StyledEcosystem>
    );
};

export default Ecosystem;
