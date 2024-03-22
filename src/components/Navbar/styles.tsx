import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    color: ${(props) => props.theme.primaryTextColor};
    font-size: 1.2rem;

    :hover {
        color: ${(props) => props.theme.primaryTextColor};
    }

    a {
        padding: 0.5rem 1.5rem;
        letter-spacing: 0.1ch;
    }
`;
