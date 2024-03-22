import styled from 'styled-components';

export const StyledLoginBtn = styled.button`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.primaryTextColor};
    background-color: transparent;
    padding: 1rem 2rem;
    gap: 1rem;
    border-radius: 6px;
    border: 1.5px solid ${(props) => props.theme.primaryTextColor};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 0.1ch;
`;
