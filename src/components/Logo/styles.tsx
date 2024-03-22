import styled from 'styled-components';

export const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.primaryTextColor};
    gap: 1rem;

    span {
        letter-spacing: -0.2ch;
    }
`;
