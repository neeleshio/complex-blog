import styled from 'styled-components';

export const StyledSocials = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
        font-size: 4rem;
        color: ${(props) => props.theme.primaryTextColor};
        text-transform: uppercase;
        color: ${(props) => props.theme.primaryTextColor};
        -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: ${(props) => props.theme.primaryTextColor};
        letter-spacing: -0.1ch;
        font-weight: 700;
    }

    .social-btns {
        display: flex;
        align-items: center;

        button {
            text-transform: uppercase;
            color: ${(props) => props.theme.primaryTextColor};
            background-color: transparent;
            border: 0;
            font-weight: 600;
            padding-left: 2.5rem;
            font-size: 1.4rem;

            span {
                padding-right: 0.8rem;
            }

            svg {
                position: relative;
                top: 2px;
            }
        }
    }
`;
