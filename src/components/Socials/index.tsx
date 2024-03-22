import React from 'react';
import { StyledSocials } from './styles';
import { Arrow } from '@/src/images/svg/Arrow';

const Socials = () => {
    return (
        <StyledSocials>
            <div className="title">
                <span>Social Media</span>
            </div>
            <div className="social-btns">
                <button>
                    <span>LinkedIn</span>
                    <Arrow />
                </button>
                <button>
                    <span>Github</span>
                    <Arrow />
                </button>
                <button>
                    <span>Email</span>
                    <Arrow />
                </button>
            </div>
        </StyledSocials>
    );
};

export default Socials;
