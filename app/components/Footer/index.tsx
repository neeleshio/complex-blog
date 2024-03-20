import React, { useEffect, useState } from 'react';
import { StyledFooter } from './styles';
import Sun from '@/app/images/svg/sun';
import Moon from '@/app/images/svg/moon';
import { useAppDispatch } from '@/app/hooks';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

type footerProps = {
    handleToggleTheme: ActionCreatorWithPayload<boolean>;
    dark: boolean;
};

const Footer = ({ handleToggleTheme, dark }: footerProps) => {
    const dispatch = useAppDispatch();

    return (
        <StyledFooter>
            <div className="theme-mode">
                <button
                    className={!dark ? 'active' : ''}
                    onClick={() => dispatch(handleToggleTheme(false))}>
                    <Sun color={!dark ? '#FF8200' : ''} />
                    <span>Light</span>
                </button>
                <button
                    className={dark ? 'active' : ''}
                    onClick={() => dispatch(handleToggleTheme(true))}>
                    <Moon color={dark ? '#FF8200' : ''} />
                    <span>Dark</span>
                </button>
            </div>
        </StyledFooter>
    );
};

export default Footer;
