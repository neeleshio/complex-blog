import React from 'react';
import { StyledLoginBtn } from './styles';
import { Rocket } from '@/src/images/svg/Rocket';

const LoginBtn = () => {
    return (
        <StyledLoginBtn>
            <span>Login</span>
            <Rocket />
        </StyledLoginBtn>
    );
};

export default LoginBtn;
