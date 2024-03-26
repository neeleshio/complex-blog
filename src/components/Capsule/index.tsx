import React from 'react';
import { StyledCapsule } from './styles';

type CapsuleProps = {
    // name: string;
    // icon: React.ReactNode;
};

const Capsule = ({ name, Icon }) => {
    return (
        <StyledCapsule>
            <div className="svg-container">
                <Icon />
            </div>
            <span>{name}</span>
        </StyledCapsule>
    );
};

export default Capsule;
