import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    color: ${(props) => props.theme.secondaryTextColor};
    font-size: 1.2rem;

    :hover {
        color: ${(props) => props.theme.primaryTextColor};
    }

    a {
        margin-right: 3rem;
        letter-spacing: 0.1ch;
    }
`;
