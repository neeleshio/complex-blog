import styled from 'styled-components';

export const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.primaryTextColor};
    gap: 1rem;
`;
