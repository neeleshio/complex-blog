import React from 'react';
import { StyledUser } from './styles';
import Image from 'next/image';

const User = () => {
    return (
        <StyledUser>
            <div className="user-name">
                <span>● Neelesh</span>
            </div>
            <div className="details">
                <div className="user-img">
                    <Image
                        alt="user"
                        width={25}
                        height={25}
                        src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                    />
                </div>
                <div className="user-id">
                    <span>0x9097qn....g56gw5</span>
                </div>
            </div>
        </StyledUser>
    );
};

export default User;
