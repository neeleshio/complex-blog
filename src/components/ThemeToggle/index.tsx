import React from 'react';
import { StyledThemeToggle } from './styles';
import Sun from '@/src/images/svg/Sun';
import Moon from '@/src/images/svg/Moon';

type toggleThemeProps = {
    _handleToggleTheme: (payload: boolean) => void;
    dark: boolean;
};

const ThemeToggle = ({ _handleToggleTheme, dark }: toggleThemeProps) => {
    return (
        <StyledThemeToggle>
            <div className="theme-mode">
                <button className={!dark ? 'active' : ''} onClick={() => _handleToggleTheme(false)}>
                    <Sun color={!dark ? '#FF8200' : ''} />
                    <span>Light</span>
                </button>
                <button className={dark ? 'active' : ''} onClick={() => _handleToggleTheme(true)}>
                    <Moon color={dark ? '#FF8200' : ''} />
                    <span>Dark</span>
                </button>
            </div>
        </StyledThemeToggle>
    );
};

export default ThemeToggle;
