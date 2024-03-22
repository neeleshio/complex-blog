import styled from 'styled-components';

export const StyledDesignation = styled.div`
    color: ${(props) => props.theme.primaryTextColor};
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: bold;
    padding: 0 2.5rem;

    h1 {
        letter-spacing: -0.05ch;
        margin: 1.5rem 0;

        &:not(:first-child):not(:last-child) {
            text-align: end;
        }
    }
`;
