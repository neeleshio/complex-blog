import styled from 'styled-components';

export const StyledFooter = styled.div`
    .theme-mode {
        display: flex;
        align-items: center;

        button {
            display: flex;
            align-items: center;
            background-color: transparent;
            border: 0;
            margin-right: 1.5rem;
            cursor: pointer;

            &.active {
                svg {
                    color: ${(props) => props.theme.primaryTextColor};
                }

                span {
                    color: ${(props) => props.theme.primaryTextColor};
                }
            }

            span {
                letter-spacing: 0.15ch;
                color: ${(props) => props.theme.secondaryTextColor};
                padding-left: 0.5rem;
                font-weight: 600;
                font-size: 1.2rem;
            }
        }
    }
`;
