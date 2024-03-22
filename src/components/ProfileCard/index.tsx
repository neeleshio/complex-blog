import React from 'react';
import { StyledProfileCard } from './styles';
import { Building } from '@/src/images/svg/Building';
import Image from 'next/image';
import clipboard from '../../images/png/clipboard.png';
import { Inter, Inconsolata, Tomorrow, Ubuntu, Arizonia } from 'next/font/google';

const arizonia = Arizonia({
    subsets: ['latin'],
    weight: ['400']
});

const ProfileCard = () => {
    return (
        <StyledProfileCard>
            <div className="user-card">
                {/* <div className="img-container">
                    <Image src={clipboard} width={125} height={125} />
                </div> */}
                <div className="company">
                    <span>Flipkart</span>
                    <div className="svg-container">
                        <Building />
                    </div>
                </div>
                <div className={`${arizonia.className} name`}>
                    <p className="hey">Hey, Iam</p>
                    <p>Neelesh</p>
                </div>
            </div>

            {/* <div className="company">
                <span>3.0 EXP</span>
                <div className="svg-container">
                    <Building />
                </div>
            </div> */}
        </StyledProfileCard>
    );
};

export default ProfileCard;
