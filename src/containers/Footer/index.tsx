import React from 'react';
import { StyledFooter } from './styles';
import ThemeToggle from '@/src/components/ThemeToggle';
import { handleToggleTheme } from '@/src/store/slices/themeSlice';
import { useAppDispatch, useAppSelector } from '@/src/hooks';

const Footer = () => {
    const dispatch = useAppDispatch();
    const { dark } = useAppSelector((state) => state.themeSlice);

    const _handleToggleTheme = (payload: boolean) => {
        dispatch(handleToggleTheme(payload));
    };

    return (
        <StyledFooter>
            <ThemeToggle _handleToggleTheme={_handleToggleTheme} dark={dark} />
        </StyledFooter>
    );
};

export default Footer;
