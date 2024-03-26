import React from 'react';
import { StyledFooter } from './styles';
import ThemeToggle from '@/src/components/ThemeToggle';
import { handleToggleTheme } from '@/src/store/slices/themeSlice';
import { useAppDispatch, useAppSelector } from '@/src/hooks';
import Logo from '@/src/components/Logo';
import Mail from '@/src/images/svg/Mail';
import Phone from '@/src/images/svg/Phone';
import Linkedin from '@/src/images/svg/Linkedin';
import Github from '@/src/images/svg/Github';

const Footer = () => {
    return (
        <StyledFooter>
            <div className="footer-container">
                <div className="left">
                    <div>
                        <Logo />
                    </div>
                    <div className="desc">
                        <span>
                            This personal portfolio website has been built with NextJs, Styled
                            Components, Tailwind and Redux Toolkit. Hosted on Vercel.
                        </span>
                    </div>
                </div>
                <div className="right">
                    <div className="contact">
                        <span className="contact-title">Contact</span>
                        <div className="mail">
                            <Mail />
                            <a href="mailto:neeleshiodev@gmail.com">neeleshiodev@gmail.com</a>
                        </div>
                        <div className="phone">
                            <Phone />
                            <span>+918xxxxxxxxx</span>
                        </div>
                    </div>
                    <div className="useful-links">
                        <span className="useful-links-title">Useful Links</span>
                    </div>
                    <div className="connect">
                        <span className="connect-title">Connect on</span>
                        <div className="connect-links">
                            <Linkedin />
                            <Github />
                        </div>
                    </div>
                </div>
            </div>
            <div className="copywrite">
                <span>© All rights reserved | 2024</span>
            </div>
        </StyledFooter>
    );
};

export default Footer;
